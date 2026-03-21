'use client';

import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown } from 'lucide-react';

export default function Portfolio() {
  const projects = [
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

  const skills = {
    "AI & ML": ["LangChain", "LangGraph", "Transformers", "BERT", "MLflow", "scikit-learn"],
    "Backend": ["Python", "Flask", "FastAPI", "SQLite", "SQLAlchemy"],
    "MLOps": ["Docker", "DagsHub", "Hugging Face", "Model Deployment", "CI/CD"],
    "Tools": ["Git", "Jupyter", "Pandas", "NumPy", "Geopy"]
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-gray-900 to-purple-900/20"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Tomiwa Oladimeji
          </h1>
          <p className="text-2xl md:text-3xl text-blue-400 mb-6">AI/ML Engineer</p>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            An engineer with 2 years experience building AI products and automating workflows
          </p>
          
          {/* Contact Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a 
              href="mailto:oladimejitomiwa31@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              <Mail size={20} />
              <span>Email</span>
            </a>
            <a 
              href="https://linkedin.com/in/tomiwa-oladimeji"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://github.com/Tomiwa-31"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ChevronDown size={32} className="mx-auto text-blue-400" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="space-y-8">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all"
              >
                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-blue-400 mb-2 md:mb-0">
                      {project.title}
                    </h3>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors w-fit"
                    >
                      <Github size={18} />
                      <span>View Code</span>
                      <ExternalLink size={16} />
                    </a>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.longDescription}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm border border-blue-700/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Key Highlights</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-300">
                          <span className="text-blue-400 mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* More Projects Coming Soon */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 italic">More projects coming soon...</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, techs]) => (
              <div 
                key={category}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all"
              >
                <h3 className="text-lg font-bold text-blue-400 mb-4">{category}</h3>
                <div className="space-y-2">
                  {techs.map((tech, idx) => (
                    <div 
                      key={idx}
                      className="text-gray-300 text-sm py-1"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2026 Tomiwa Oladimeji. 
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Deployed on Vercel
          </p>
        </div>
      </footer>
    </div>
  );
}