export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  type: "full-time" | "part-time" | "internship" | "volunteer";
  description: string;
  bullets: string[];
  tags: string[];
}

export const experiences: Experience[] = [
  {
    company: "Skyward",
    role: "Automation & Technology Lead",
    period: "Apr 2025 — Present",
    location: "Remote",
    type: "part-time",
    description:
      "Leading the design and development of AI and data systems for an 11-person digital agency.",
    bullets: [
      "Built and manage the company's AI, automation, and operational codebase from the ground up — 100,000+ lines of production Python",
      "Designed and implemented a BigQuery data warehouse from scratch — 50+ tables with full data governance and 5+ automated ETL pipelines",
      "Architected a large-scale AI-powered FAQ generation system with 100,000+ document embeddings using a custom RAG pipeline with multi-query retrieval and reranking",
      "Scaled AI systems to generate thousands of FAQ pages per day with multi-stage validation maintaining A-grade response quality",
      "Developing multi-agent AI workflows for content generation with quality gates and automated publishing",
      "Built internal Streamlit tools for pipeline configuration, cost estimation, and data validation",
    ],
    tags: [
      "Python",
      "BigQuery",
      "RAG",
      "LLM",
      "Streamlit",
      "ETL",
      "GCP",
      "n8n",
    ],
  },
  {
    company: "Skyward",
    role: "Project Manager",
    period: "Sep 2025 — Mar 2026",
    location: "Remote",
    type: "part-time",
    description:
      "Managed end-to-end project delivery for major clients and internal projects.",
    bullets: [
      "Coordinated project delivery for 3 major clients across an 11-person team with weekly client meetings, standups, and 1:1s",
      "Designed ClickUp infrastructure: 100+ page knowledge base, 25+ reusable templates, 20+ dashboards",
      "Conducted weekly retrospectives and documented action items to drive continuous process improvement",
    ],
    tags: ["Project Management", "Agile", "ClickUp", "Leadership"],
  },
  {
    company: "InterServer",
    role: "Datacenter Technician",
    period: "Jan 2025 — Mar 2026",
    location: "Secaucus, NJ",
    type: "full-time",
    description:
      "Built and deployed production servers across multiple datacenters.",
    bullets: [
      "Built and deployed 1,000+ production servers across 8 datacenters, managing full hardware lifecycle from assembly through rack integration",
      "Configured datacenter infrastructure including power distribution, network switches, and fiber optic cabling",
      "Executed hardware troubleshooting and repair operations, diagnosing component failures to minimize downtime",
    ],
    tags: ["Linux", "Networking", "Server Deployment", "Hardware"],
  },
  {
    company: "Globe Tax Services",
    role: "Systems & DevOps Intern",
    period: "May 2023 — Aug 2023",
    location: "New York, NY",
    type: "internship",
    description:
      "Integrated internal systems and automated data processing workflows.",
    bullets: [
      "Integrated internal systems for database, security, and form management; collaborated with BA, QA, and UAT teams",
      "Automated client information processing using C, XML, and HTML; performed ETL into SQL Server",
    ],
    tags: ["C", "XML", "SQL Server", "ETL", "DevOps"],
  },
  {
    company: "Globe Tax Services",
    role: "DevOps Intern",
    period: "May 2022 — Aug 2022",
    location: "New York, NY",
    type: "internship",
    description: "Automated client processing and improved data management systems.",
    bullets: [
      "Developed programs for client information processing automation, replacing manual methods",
      "Upgraded XML-based programs and redesigned DMS processes, improving SQL Server efficiency",
    ],
    tags: ["XML", "SQL Server", "Automation", "DMS"],
  },
];
