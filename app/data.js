export const projects = [
  {
    id: 0,
    title: "Conversio: AI-Assisted Support Ticketing",
    description: "A B2B support platform where Claude drafts replies from approved knowledge and read-only account lookups, and a human agent approves every message.",
    longDescription: "Built a Pylon-style ticketing system with an advisory AI layer. Messages from customer chat, Slack and Gmail are normalised into one canonical event, routed through a trigger engine and SLA timers, and shown live on an agent dashboard. For Conversio chats, Claude reads the masked conversation, searches an approved knowledge base, calls allowlisted read-only tools through an MCP gateway, and proposes a draft. Nothing reaches the customer until a support agent approves it.",
    techStack: ["Claude", "MCP", "FastAPI", "asyncio", "SQLAlchemy", "Postgres + pgvector", "Voyage AI", "WebSockets", "Pydantic", "Pytest", "Render"],
    github: "https://github.com/Tomiwa-31/Ai-support-ticketing-system",
    highlights: [
      "Human-in-the-loop by design: the AI only writes suggestions, and approval goes through the same validated message path as any agent reply",
      "Channel-agnostic core: Conversio chat, Slack webhooks and Gmail IMAP all become one canonical event, so nothing downstream knows the source",
      "PII masking before any model or embedding call: emails, phones and card/account numbers become placeholders, and card numbers are never restored",
      "MCP tool gateway as the only route to product systems: allowlisted read-only tools, a 4-call cap per run, results re-masked and every call logged",
      "RAG over a published-only knowledge base with Voyage embeddings, with citations that don't match retrieved articles dropped",
      "Full auditability: every model call stores its prompt, output, tokens, latency and tool-step log, and failures degrade gracefully without blocking the ticket",
      "Trigger engine, status machine and SLA breach checker, with tests covering masking, the approval gate, the tool gateway and the AI worker end to end"
    ]
  },
  {
    id: 1,
    title: "End-to-End ML Project with MLflow",
    description: "A comprehensive wine quality prediction system with complete MLOps pipeline including experiment tracking, model versioning, and deployment automation.",
    longDescription: "Built an end-to-end machine learning pipeline for wine quality prediction with MLflow integration. The project demonstrates full MLOps workflow from data ingestion to model deployment, featuring automated experiment tracking, parameter optimization, and model registry management.",
    techStack: ["Python", "MLflow", "Flask", "Docker", "DagsHub", "scikit-learn", "Jupyter"],
    github: "https://github.com/Tomiwa-31/End_to_End_machine_learning_project_with_mlflow",
    highlights: [
      "Complete ML pipeline with modular architecture",
      "MLflow experiment tracking and model versioning",
      "Dockerized deployment for production",
      "DagsHub integration for remote tracking",
      "Flask web app for predictions"
    ]
  },
  {
    id: 2,
    title: "AI Crime Reporter",
    description: "An intelligent crime reporting system using AI to verify and classify reports in real-time with geographic validation and trust scoring.",
    longDescription: "Developed a full-stack AI application that verifies crime reports using fine-tuned BERT models and LangGraph workflows. The system features real-time classification, multi-source geolocation, and an interactive dashboard with live crime statistics.",
    techStack: ["LangGraph", "BERT", "Transformers", "Flask", "SQLite", "Leaflet.js", "Docker", "Hugging Face"],
    github: "https://github.com/Tomiwa-31/ai_crime_reporter_v1",
    highlights: [
      "Fine-tuned BERT model for report verification (93% accuracy)",
      "LangGraph workflow for intelligent validation",
      "Real-time geographic verification system",
      "Interactive crime mapping dashboard",
      "Deployed on Hugging Face Spaces"
    ]
  },
  {
    id: 3,
    title: "NovaBuy Customer Support RAG System",
    description: "An AI-powered customer support chatbot that grounds answers in company policy documents, eliminating hallucinations through hybrid retrieval.",
    longDescription: "Built a production-grade RAG system for ecommerce customer support that retrieves accurate answers from a structured knowledge base of return policies, shipping rules, and account security documents. The system uses hybrid search (semantic + keyword) and escalates to humans when confidence is low, ensuring reliable and traceable responses.",
    techStack: ["LangChain", "Groq", "ChromaDB", "FastAPI", "Docker", "GCP Cloud Run", "BM25", "all-MiniLM-L6-v2"],
    github: "https://github.com/Tomiwa-31/CUSTOMER-SUPPORT-RAG-CHATBOT-SYSTEM",
    highlights: [
      "Hybrid retrieval with BM25 + semantic search via EnsembleRetriever",
      "Deployed on GCP Cloud Run with Docker containerization",
      "Structured logging and monitoring with GCP Cloud Logging",
      "FastAPI REST endpoints with Pydantic validation",
      "Zero hallucinations through document-grounded responses"
    ]
  }
];

export const flows = {
  0: ["Chat / Slack / Gmail", "Canonical event", "Triggers + SLA", "Mask PII", "RAG + MCP tools", "Claude draft", "Human approval"],
  1: ["Ingest", "Train", "MLflow tracking", "Model registry", "Docker + Flask"],
  2: ["Report", "BERT verify", "LangGraph checks", "Geo validation", "Live dashboard"],
  3: ["Query", "BM25 + semantic", "EnsembleRetriever", "Groq LLM", "Escalate if low confidence"],
};

export const labels = {
  0: "Agentic AI · RAG · MCP",
  1: "MLOps",
  2: "LLM Workflows · NLP",
  3: "RAG · Production",
};

export const stats = [
  { value: "4", label: "end-to-end AI/ML systems built" },
  { value: "5", label: "deploy targets: GCP Cloud Run, Hugging Face, AWS EC2, Docker Compose, Render" },
  { value: "100%", label: "AI drafts gated by human approval" },
];

export const skills = {
  "LLM & Agentic Systems": ["LangChain", "LangGraph", "Claude API", "MCP", "Tool use", "Prompt design"],
  "Retrieval & NLP": ["RAG", "Hybrid search (BM25 + vector)", "ChromaDB", "pgvector", "Embeddings", "BERT / Transformers"],
  "MLOps & Deployment": ["MLflow", "DagsHub", "Docker", "GCP Cloud Run", "Hugging Face Spaces", "CI/CD"],
  "Backend & Data": ["Python", "FastAPI", "Flask", "SQLAlchemy", "Pydantic", "Pandas / NumPy"],
  "Reliability & Safety": ["PII masking", "Human-in-the-loop", "Audit logging", "Pytest", "Structured logging", "Graceful degradation"],
};
