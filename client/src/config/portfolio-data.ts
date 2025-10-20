import type { Project, Experience, Education, Achievement, Skill } from "@shared/schema";

export const personalInfo = {
  name: "Aadarsh Pathre",
  title: "AI Engineer • Full-Stack Developer • ML Innovator",
  location: "Chinchwad, Pune",
  phone: "+91 7769940007",
  email: "aadarshpathre.23@gmail.com",
  linkedin: "linkedin.com/in/aadarshpathre",
  github: "github.com/AadarshCanCode",
  tagline: "Building intelligent systems that bridge AI innovation with real-world impact",
  bio: "Passionate AI Engineer and Full-Stack Developer specializing in Computer Vision, NLP, and Explainable AI. Currently pursuing dual degrees in Data Science (IIT Madras) and AI/ML Engineering (Vishwakarma University). I build scalable AI solutions that solve real problems, from autonomous drone systems to healthcare diagnostics.",
};

export const education: Education[] = [
  {
    id: "1",
    degree: "BS in Data Science and Programming",
    institution: "IIT Madras (Online Degree Program)",
    period: "June 2024 – May 2028",
  },
  {
    id: "2",
    degree: "BTech in Computer Science Engineering - AI and ML",
    institution: "Vishwakarma University",
    period: "June 2024 – June 2027",
  },
  {
    id: "3",
    degree: "Diploma in AIML",
    institution: "Ajeenkya D Y Patil School of Engineering",
    period: "June 2021 – May 2024",
  },
];

export const experience: Experience[] = [
  {
    id: "1",
    role: "AI Team Member",
    company: "Multi-Disciplinary Drone Project",
    period: "Dec 2024 – Present",
    current: true,
    description: "Leading AI development for autonomous drone navigation and environmental mapping",
    achievements: [
      "Developed LIDAR integration and mapping system on Raspberry Pi 5, enabling real-time 3D environmental mapping for autonomous navigation with 15Hz update rate",
      "Architected GPS-free autonomous drone system using visual SLAM, YOLOv5 object detection, and MiDaS depth estimation, achieving 95% navigation accuracy in indoor environments",
      "Implemented radio-free video transmission pipeline from drone to ground system using WiFi direct, reducing latency by 40% and eliminating radio interference issues",
    ],
  },
  {
    id: "2",
    role: "Junior Data Science Intern",
    company: "i3systems.ai",
    period: "June 2023 – Sept 2023",
    description: "Built NLP models for insurance document automation and processing",
    achievements: [
      "Designed and trained custom SpaCy NER model for insurance document processing, achieving 92% precision across 15 entity types and processing 1000+ documents daily",
      "Contributed in building end-to-end automation pipeline integrating OCR, NLP models, and data validation, reducing manual processing time by 60% and saving 200+ hours monthly",
      "Collaborated with cross-functional engineering team to deploy models into production",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Digital and Intelligence Diet Plan (DIP) RAG Agent",
    slug: "dip-rag-agent",
    description: "AI-driven RAG system for personalized nutrition guidance using IBM Watson and Granite models",
    longDescription: "Developed an AI-driven Retrieval-Augmented Generation (RAG) system for personalized nutrition guidance using IBM Watson Studio for model orchestration and deployment.",
    technologies: ["IBM Watson", "IBM Granite", "Astra DB", "LangFlow", "Next.js", "RAG", "Vector DB"],
    date: "Oct 2025",
    featured: true,
    highlights: [
      "Leveraged IBM Granite models for both embedding generation and LLM-based response synthesis, ensuring domain-specific accuracy and efficiency",
      "Integrated Astra DB vector store for scalable semantic retrieval across 10K+ nutritional records, enabling context-aware and adaptive meal recommendations",
      "Built and managed the end-to-end pipeline in LangFlow and deployed a Next.js frontend with multilingual voice interaction (STT/TTS) for accessibility",
    ],
  },
  {
    id: "2",
    title: "CNN-based Diabetic Retinopathy Detection with LLM & XAI",
    slug: "diabetic-retinopathy-detection",
    description: "AI system achieving 94% accuracy for diabetic retinopathy classification with explainability features",
    longDescription: "Developed CNN model achieving 94% accuracy for diabetic retinopathy classification across 5 severity levels using 35,000 retinal fundus images with data augmentation.",
    technologies: ["PyTorch", "Grad-CAM", "Hugging Face", "Flask", "Computer Vision", "XAI"],
    date: "Oct 2024",
    featured: true,
    highlights: [
      "Integrated Grad-CAM explainability to highlight critical retinal regions, improving diagnostic confidence for ophthalmologists by providing visual evidence of model decisions",
      "Enhanced system with Hugging Face LLM integration to generate clinician-friendly explanations, reducing interpretation time by 30% in clinical pilot study",
    ],
  },
  {
    id: "3",
    title: "Movinglines - Mathematical Animation Platform",
    slug: "movinglines",
    description: "SaaS platform transforming natural language into mathematical animation videos using Manim and LLM",
    longDescription: "Building SaaS platform to transform natural language prompts into mathematical animation videos using Manim library and LLM integration for automated code generation.",
    technologies: ["React", "Python", "Manim", "OpenAI API", "AWS", "S3", "Cloud Architecture"],
    date: "Nov 2024 – Present",
    featured: true,
    highlights: [
      "Targeting 10,000+ educators to democratize interactive learning content creation, reducing video production time from hours to minutes with zero animation expertise required",
      "Implementing scalable cloud architecture on AWS with automated video rendering pipeline, supporting concurrent processing of 50+ animation requests with S3 storage integration",
    ],
  },
  {
    id: "4",
    title: "Combinatorial Reasoning in LLMs (CRQUBO)",
    slug: "crqubo",
    description: "Modular reasoning framework combining LLM sampling with QUBO-based optimization",
    longDescription: "Built modular reasoning framework combining LLM sampling, semantic filtering, and QUBO-based combinatorial optimization, improving complex query accuracy by 35% over baseline.",
    technologies: ["Python", "QUBO", "Gradio", "Z3", "LangChain", "Theorem Proving"],
    date: "Sep 2024",
    featured: true,
    highlights: [
      "Implemented task-agnostic interface supporting multiple reasoning domains (causal, logical, arithmetic), processing 100+ diverse query types with consistent performance",
      "Integrated Z3 theorem prover verification and ordering modules, achieving 89% consistency in multi-step reasoning chains across 500+ test cases with formal verification",
      "Deployed interactive Gradio web demo enabling real-time query experimentation with performance visualization, response analysis, and reasoning chain inspection",
    ],
  },
];

export const achievements: Achievement[] = [
  {
    id: "1",
    title: "AI Headcount System Deployment",
    description: "Deployed AI Headcount System at Shri Mahalaxmi Mandir, Pune during Navratri 2025, managing 50,000+ daily visitors and improving crowd flow efficiency by 30% through real-time occupancy monitoring",
    date: "2025",
    icon: "trophy",
  },
  {
    id: "2",
    title: "IBM Hackathon - 1st Place",
    description: "1st Place Winner at IBM Hackathon among 15 colleges at Vishwakarma University for developing multi-agent AI solution using IBM Watsonx and Cloud, leading team of 3 developers",
    date: "2025",
    icon: "award",
  },
  {
    id: "3",
    title: "Codeathon 2025 Winner",
    description: "1st Place Winner in Codeathon 2025, the inter-departmental Machine Learning Hackathon hosted by Vishwakarma University, competing against 20+ teams for developing multimodal healthcare platform",
    date: "2025",
    icon: "code",
  },
  {
    id: "4",
    title: "Open Source Contributor",
    description: "Open Source Contributor with 10+ repositories on GitHub including ML frameworks and educational tools, actively contributing to AI/ML community with practical implementations",
    icon: "github",
  },
  {
    id: "5",
    title: "Professional Certifications",
    description: "IBM Full Stack Software Developer | LangChain for LLM Application Development | Project Management Certification",
    icon: "certificate",
  },
];

export const skills: Skill[] = [
  // Languages
  { name: "Python", category: "Languages" },
  { name: "TypeScript", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "C", category: "Languages" },
  { name: "SQL", category: "Languages" },
  { name: "Bash", category: "Languages" },
  
  // AI/ML Frameworks
  { name: "PyTorch", category: "AI/ML" },
  { name: "TensorFlow", category: "AI/ML" },
  { name: "Scikit-learn", category: "AI/ML" },
  { name: "OpenCV", category: "AI/ML" },
  { name: "Hugging Face", category: "AI/ML" },
  { name: "Ultralytics", category: "AI/ML" },
  { name: "MiDaS", category: "AI/ML" },
  { name: "FastAI", category: "AI/ML" },
  { name: "Manim", category: "AI/ML" },
  
  // Web & Backend
  { name: "React", category: "Web" },
  { name: "Next.js", category: "Web" },
  { name: "Django", category: "Web" },
  { name: "FastAPI", category: "Web" },
  { name: "Node.js", category: "Web" },
  { name: "Flask", category: "Web" },
  { name: "Tailwind CSS", category: "Web" },
  
  // Data & AI Tools
  { name: "LangChain", category: "AI Tools" },
  { name: "LangGraph", category: "AI Tools" },
  { name: "LlamaIndex", category: "AI Tools" },
  { name: "LangFlow", category: "AI Tools" },
  { name: "FAISS", category: "AI Tools" },
  { name: "ChromaDB", category: "AI Tools" },
  { name: "AstraDB", category: "AI Tools" },
  { name: "Supabase", category: "AI Tools" },
  { name: "Gradio", category: "AI Tools" },
  { name: "SpaCy", category: "AI Tools" },
  { name: "Ollama", category: "AI Tools" },
  
  // Cloud & DevOps
  { name: "AWS", category: "Cloud" },
  { name: "Google Cloud", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "Git", category: "DevOps" },
  { name: "Linux", category: "DevOps" },
  { name: "Vercel", category: "Cloud" },
  
  // Specialized
  { name: "Z3 Theorem Prover", category: "Specialized" },
  { name: "QUBO Optimization", category: "Specialized" },
  { name: "Grad-CAM", category: "Specialized" },
  { name: "Visual SLAM", category: "Specialized" },
  { name: "STT/TTS Models", category: "Specialized" },
];
