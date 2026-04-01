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
    name: "AI & ML",
    skills: [
      "TensorFlow",
      "Keras",
      "PyTorch",
      "Scikit-learn",
      "NumPy",
      "Pandas",
      "OpenAI API",
      "Claude API",
      "Gemini API",
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
      "Data Governance",
    ],
  },
  {
    name: "Cloud & Infrastructure",
    skills: ["GCP", "Linux", "Networking", "Server Deployment", "Docker"],
  },
  {
    name: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "n8n",
      "Streamlit",
      "ClickUp",
      "Looker Studio",
      "GA4",
      "DataForSEO",
    ],
  },
];
