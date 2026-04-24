---
slug: production-rag-pipeline-at-scale
title: "How I Built a Production RAG Pipeline at Scale — Mistakes and All"
date: "2026-04-10"
excerpt: "The real story of building an AI content generation pipeline for 27,000 pages — from writer agents and validator chains to a RAG system that cut costs by 87% and drove a +17% lift in impressions."
tags: ["RAG", "Multi-Agent", "Production AI"]
coverImage: "/images/blog/production-rag-pipeline-at-scale/cover.jpg"
---

The goal of this project was simple on paper: build a system where I could click a button and generate thousands of FAQ pages with no manual revisions afterwards. No human in the loop, no one going back to check the answers — just accurate, publish-ready content at scale.

The client had about 27,000 product pages that drove conversions, and the plan was to boost organic traffic by adding high-quality, relevant FAQs. The target cost was 10 cents per page — about $2,700 total for the MVP.

It did not go as planned. But by the end of it, I'd built a pipeline with enough validation, checks, and flagging that I was confident I could do exactly that — click a button and generate thousands of FAQs with no manual revisions needed. What I ended up building was way more robust than what was originally scoped.

![Documents flowing through an AI pipeline](/images/blog/production-rag-pipeline-at-scale/cover.jpg)

### Gathering the Data

The first step was pulling together everything I could about each page. I scraped the site itself and pulled data from SERP features — People Also Ask questions, top keywords, related keywords for each page. I also collected the product manuals and installation guides associated with each page — these would be the source of truth for generating accurate answers later on.

The raw questions needed a lot of cleaning. Just because a People Also Ask question appeared for a specific page didn't mean it was actually about that page. Some had the wrong model number in them. Some referenced the wrong brand — a question might be about the right type of product but mention a competitor instead of the correct manufacturer. Others were completely irrelevant to the page, asking general questions about the company itself rather than the product. And there were legal questions that had to be removed entirely.

I built a pre-filtering pipeline using a combination of manual pattern matching and AI classification (Gemini Flash 2.5 for all the question-level tasks — classification, deduplication, fixing) to sort every question into three buckets: remove it, keep it as-is, or keep it but modify it. The modifications ranged from simple swaps like correcting a model number to more involved rewrites to make the question actually relevant to the page it was going to live on.

Some pages had plenty of PAA data after filtering, others had almost nothing.

Initially I used AI to generate questions to fill in the gaps. That worked okay, but I got better results when I started looking at similar pages that did have questions and pulling out the most common ones. I'd take those common questions, templatize them, and morph them to fit the specific page that was missing data. This gave me much more relevant, grounded questions than generating them from scratch.

By the end of this step, I had a solid set of questions and contextual data for all 27,000 pages. But I had a new problem.

### The Duplicate Question Problem

Duplicate questions were a major issue. The People Also Ask data would frequently return two questions for the same page that were basically identical — just worded slightly differently. On top of that, some of the questions I had just modified during the filtering step were now duplicates of existing questions too — by correcting a model number or rewording a question to fit the page, I'd inadvertently created new overlaps. At 27,000 pages with 3-6 questions each, I needed a reliable and scalable solution.

I started with the obvious stuff: hard deduplication and fuzzy matching. This wasn't good enough. Multiple questions could have the same semantic meaning but be structured with different enough words to bypass the fuzzy matching threshold.

Next I tried using embeddings to compare the semantic value of each question. This helped on top of the fuzzy matching, but some questions had just different enough phrasing that they slipped through the embedding similarity check too. And I couldn't crank the similarity threshold too high without getting a ton of false positives on questions that were genuinely different.

Then I tried using a small LLM — just feed it all the questions for a page and ask it to identify which ones were duplicates. It sort of worked, but wasn't reliable. Non-deterministic behavior meant it would flag something as a duplicate one run and miss it the next.

So I added another layer: a classifier LLM that would categorize each question by type. Was it about the lifespan of a product? The size? A specific feature? Troubleshooting? I classified every question and then used fuzzy matching on the classifications to help identify duplicates that were asking the same type of question about the same thing. This got even closer but still wasn't perfect.

Next I combined the classification with the LLM duplicate detection — feeding the classified questions into a final LLM pass that would flag duplicates with the added context of what category each question belonged to. Better, but still inconsistent because of the inherent non-deterministic behavior of large language models.

Here's what finally cracked it: I ran that final LLM step multiple times. If I ran it five times and a question pair got flagged as a duplicate only once, it was probably a false positive. If it got flagged four or five times out of five, it was almost certainly a real duplicate. Essentially a multi-shot classification approach to filter out the noise from non-deterministic LLM behavior.

Once I did this, it worked with near-perfect accuracy. I could not find an example of a duplicate question that got through. It was a massive effort to get there — I went through like six iterations of the deduplication system — but the final version was rock solid.

### Internal Linking

Generating accurate answers was only part of the goal — I also wanted the FAQ content to drive internal linking across the site.

The first tier was straightforward. Each page already had related resources like documentation and guides, so linking from the FAQ answers to those was easy to automate.

The second tier required working with the client to build out a content map of pages that were fair game for linking. These pages were categorized and labeled, which made it simple to filter — if a product fell into a specific category, the pipeline would only pull from linkable pages within that same category. This kept the links relevant instead of just scattering them across the site.

The third tier was component-level linking. The FAQ answers often referenced specific items that had their own pages on the site. I'd already pulled that data during the initial scrape, so I was able to match references in the generated answers to the correct pages and link directly to them.

### Choosing the Right Model

I started with GPT-4 because it was the cheapest option. After testing the answer quality, I quickly realized I needed something better. Accuracy was the number one priority — the whole point was to generate content that could go live without someone having to go back and manually edit every page. I moved up through a few models and landed on GPT-5.2.

I also learned early on that grouping all the questions for a single page into one prompt call produced worse results. The model would start hallucinating between questions — mixing up details from one answer into another. Since accuracy was non-negotiable, I switched to one question per API call.

### The Validation System

Generating an answer wasn't enough. I needed to be confident that every single answer met the standard before it went live. So I built a full system of checks and balances around the generation step.

Each answer went through a validator agent powered by Perplexity Sonar — a fact-checker that would read the response and evaluate it on multiple criteria: factual accuracy based on available information, tone and style consistency, keyword usage, structural formatting, word count, and whether the internal links were correctly placed and pointing to valid pages. It scored each category and gave an overall grade. The only way an answer made it through was if it got an A on every single one.

If it didn't pass, it went back through a retry loop. Sometimes the edits were small — a keyword fix, a phrasing adjustment. Sometimes the entire answer needed to be rewritten. The system would keep retrying until it produced something that met the bar.

This worked. The quality was there. But it came at a cost — literally.

### The Cost Problem

After the first 500 to 1,000 pages, I did the math and realized it was costing about $1.60 per page. At 27,000 pages, that's over $43,000 — way beyond the $2,700 budget.

Two things were driving the cost up:

**The retry loops.** Every failed validation meant another full API call. Some answers took three or four attempts to pass, which multiplied the per-page cost significantly.

**The context window bloat.** For each page, I was including the full product manual and installation guide in the prompt to give the model enough context to answer accurately. These documents ranged from 10 pages to 250 pages. And here's the part I didn't catch at first — a lot of these manuals were multilingual. They'd start in English, then repeat the entire thing in Spanish, then Italian, then French. I was sending all of that into the context window every time. Duplicated information in languages I didn't even need, bloating every single call.

I needed a fundamentally different approach.

### Building the RAG Pipeline

The solution was RAG — Retrieval-Augmented Generation. Instead of stuffing the entire manual into the prompt, I'd chunk the documents, store the embeddings in a vector database, and retrieve only the relevant pieces for each question.

**Chunking and filtering.** I split every document into chunks, generated embeddings, and stored them. During this step, I also checked the language of each chunk. If it scored too far from English, I threw it out. This alone massively reduced the amount of data I was storing and searching through — all those Spanish, Italian, and French sections just disappeared from the pipeline.

**Query expansion.** For each FAQ question, I ran it through GPT-4 mini to expand it into up to 5 different search queries. This helped catch relevant information that might be worded differently in the source documents than in the question itself.

**Retrieval and re-ranking.** Each expanded query pulled the top 30 chunks from the vector database. After all queries ran, I fed everything through a re-ranker and kept the top 10 chunks total.

**Context padding.** For each of those top 10 chunks, I also pulled the chunks immediately before and after it (n-1 and n+1). This was important because the chunking process doesn't respect sentence boundaries perfectly — the actual answer might start at the end of one chunk and continue into the next. The padding gave that extra buffer. After padding, any adjacent chunks got merged into seamless paragraphs so the model wasn't reading choppy fragments.

**Two types of retrieval.** I actually ran two separate retrieval passes per page:

1. *Question-specific retrieval* — based on the actual FAQ question, pulling in chunks relevant to that specific answer.
2. *Page-specific retrieval* — a generic query using the product model number, pulling in general information about that product. This gave the model broader context about the page so the FAQ answers weren't just answering the question in isolation — they could reference relevant product details naturally.

The result was a **93% reduction in context window size**. And the answer quality was actually better than before, because the model was getting precisely the information it needed instead of having to dig through 250 pages of multilingual documentation.

### The BigQuery Disaster

This is where I made three critical mistakes.

**Mistake #1: Using BigQuery as a vector database.** BigQuery was where all of the data already lived, I'd only been on Google Cloud Platform for about six months at that point, and I didn't think twice about putting the embeddings there too. The problem is that BigQuery is built around on-demand computing. Every query spins up resources, runs the computation, and charges you for it. That's fine for analytics, but for a RAG pipeline at scale, the math is brutal.

Think about it: for each page, there were around 3 questions. Each question expanded into 5 queries for question-specific retrieval, plus 5 queries for page-specific retrieval. Each of those 10 queries pulled 30 chunks. After re-ranking to the top 10 results, I needed to pull up to 20 more chunks for the context padding. That's a staggering number of individual database queries per page. Now multiply that by 27,000 pages, running 40 to 50 pages concurrently.

I blew through the daily BigQuery quota in about 30 minutes.

**Mistake #2: Forgetting to partition the table.** When I first set up the embeddings table, I had it properly chunked and partitioned so queries would only scan the relevant subset of data. But during the project I had to migrate from one embedding model to another, which meant recreating the table. When I rebuilt it, I forgot to set up the partitioning. So even though the queries were filtering by product model number, BigQuery was scanning the entire table every time. Instead of 50-60 MB per query, it was scanning 1.5 GB. Every single query.

**Mistake #3: No alerts for runaway compute usage.** I had alerts set up for individual large queries — if a single massive query got sent, it would get shut down immediately and require an administrator to approve it. But I had nothing in place for the scenario where thousands of small-ish queries were chewing through compute at an insane rate. There was no flag for "you've used 50% of your daily quota in 20 minutes." So I had no way of knowing what was happening until I'd already hit the quota limit.

Those three things combined — the wrong database for the workload, the missing partitioning, and no runaway-usage alerts — meant the first day of full-speed generation was extremely expensive. I didn't even realize it until after the fact.

### The Fix

Once I figured out what happened, I moved fast:

1. **Re-partitioned the BigQuery table** properly. This dropped the per-query cost dramatically just by scanning the right data instead of the whole table.
2. **Migrated the embeddings to Supabase.** Supabase is built for this kind of workload — it handles vector similarity search natively without the on-demand compute overhead of BigQuery.
3. **Added BigQuery quota alerts** at 25%, 50%, 75%, and 90% of the daily quota so I'd get a warning well before another disaster like this could happen.

After all three fixes, the cost came down to about **20 cents per page**. I didn't hit the original 10-cent target, but I'd built a significantly more robust system than was originally planned. The validation pipeline, the dual-retrieval strategy, the query expansion, the re-ranking — none of that was in the original scope. At 20 cents a page for the quality I was getting, I was happy with it.

### The Results

I rolled out the first batch of about 8,000 pages with AI-generated FAQs and compared their performance against the rest of the 27,000 pages that hadn't been published yet. Within two weeks:

- **+17% impressions** — more people were seeing these pages in search results
- **+10% clicks** — more people were actually clicking through
- **+18% average rank improvement** — the pages were climbing in search rankings
- **8x increase in AI Overview appearances** — pages with FAQs were showing up in Google's AI Overviews at 8 times the rate of the control group

Two weeks. Just from adding well-written, accurate FAQ content to existing product pages. No link building, no redesign, no technical SEO overhaul — just relevant questions and answers that matched what people were actually searching for.

All the work — the writer agent, the validator, the RAG system, the deduplication, the BigQuery disaster and the Supabase migration — it was all to get to this point. Content accurate enough and good enough to move the needle at scale. And it did.

### What I Took Away From This

The biggest lesson was that at scale, your infrastructure decisions matter as much as your AI decisions. I could have had the best prompt engineering and the most accurate model in the world, and it wouldn't have mattered if every query was scanning 1.5 GB of data across a database that wasn't designed for vector search.

The other thing that stuck with me is how much the cost equation changes when you go from prototyping to production. The pipeline worked great on 10 pages. It worked fine on 100 pages. At 1,000 pages the cracks started showing, and at 27,000 pages everything that was slightly inefficient became a real problem. The multilingual document bloat, the retry loops, the database architecture — all of it was manageable at small scale and unsustainable at production scale.

The deduplication problem taught me something different — that sometimes the best solution isn't a better algorithm, it's running the same imperfect algorithm multiple times and using consensus to filter out the noise. That multi-shot approach turned an unreliable LLM classifier into something with near-perfect accuracy.
