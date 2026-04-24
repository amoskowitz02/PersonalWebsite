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
      "Leading the design and development of agentic AI systems — RAG pipelines, multi-agent orchestration, and the production data infrastructure behind them.",
    bullets: [
      "Architected an end-to-end RAG pipeline integrating vector database storage with 100,000+ document embeddings (custom scraping, normalization, and ingestion), multi-query retrieval with reranking, and document-level constraint filtering, reducing LLM input cost by 97% while maintaining client-validated response quality",
      "Built a multi-agent orchestration framework coordinating LLM-powered pipelines with quality gates, validation checkpoints, and automated publishing, scaling production workloads to 27,000+ generated pages with measurable downstream impact (+17% impressions, +10% clicks, +18% average rank)",
      "Architected a BigQuery data warehouse from scratch with 100+ tables, data governance, schema design, and 5+ automated ETL pipelines, and integrated AI/LLM solutions directly with the firm's data environment via SQL-driven retrieval and analytics",
      "Engineered Skyward's AI, automation, and operational Python codebase from the ground up (100,000+ lines of code), establishing core abstractions, deployment patterns, and reusable workflows",
      "Developed internal tools using Streamlit for pipeline configuration, cost estimation, data validation, and reporting, enabling non-technical stakeholders to run and monitor AI pipelines",
      "Led cross-functional delivery of AI/automation initiatives across 3 major clients, running weekly client meetings and sprint retrospectives while building ClickUp infrastructure (100+ page knowledge base, 25+ reusable templates, 20+ dashboards) for standardized workflows and delivery visibility",
      "Acted as primary technical liaison between clients and internal teams, translating business requirements into AI pipeline specifications and facilitating weekly 1:1s to align priorities and drive continuous process improvement",
    ],
    tags: [
      "Python",
      "BigQuery",
      "RAG",
      "Multi-Agent",
      "Vector DB",
      "LLM",
      "Streamlit",
      "ETL",
      "GCP",
    ],
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
