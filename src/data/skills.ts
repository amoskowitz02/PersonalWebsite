export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["Python", "C", "C++", "Java", "OCaml", "SQL", "TypeScript"],
  },
  {
    name: "ML Libraries",
    skills: [
      "TensorFlow",
      "Keras",
      "PyTorch",
      "Scikit-learn",
      "NumPy",
      "Pandas",
    ],
  },
  {
    name: "LLM Frameworks & APIs",
    skills: [
      "LangChain",
      "LangGraph",
      "Pydantic",
      "FastAPI",
      "OpenAI API",
      "Claude API",
      "Gemini API",
      "Vertex AI",
      "Perplexity API",
    ],
  },
  {
    name: "Vector DBs & Embeddings",
    skills: [
      "pgvector",
      "Supabase",
      "BigQuery Vector Search",
      "OpenAI embeddings",
      "Gemini embeddings",
    ],
  },
  {
    name: "AI Techniques",
    skills: [
      "RAG",
      "Vector Databases",
      "Semantic Search",
      "Reranking",
      "Multi-Agent Systems",
      "LLM Orchestration",
      "Prompt Engineering",
      "Human-in-the-Loop AI",
      "NLP",
      "Deep Learning",
      "CNN",
      "RNN",
      "Reinforcement Learning",
    ],
  },
  {
    name: "Data & Databases",
    skills: [
      "BigQuery",
      "PostgreSQL",
      "Microsoft SQL",
      "Data Warehousing",
      "Data Modeling",
      "ETL/ELT",
      "Data Pipeline Architecture",
      "Data Governance",
    ],
  },
  {
    name: "Data Engineering Tools",
    skills: [
      "Streamlit",
      "Jupyter",
      "Web Scraping",
      "Google Sheets API",
      "Looker Studio",
      "Data Visualization",
    ],
  },
  {
    name: "Cloud & Infrastructure",
    skills: [
      "GCP",
      "Cloud Run",
      "Cloud Functions",
      "Vertex AI",
      "Linux",
      "Networking",
      "Server Deployment",
    ],
  },
  {
    name: "Tools & Methodologies",
    skills: [
      "Git",
      "GitHub",
      "n8n",
      "ClickUp",
      "Agile",
      "Scrum",
      "A/B Testing",
      "GA4",
      "DataForSEO",
      "PowerPoint",
      "Excel",
    ],
  },
];
