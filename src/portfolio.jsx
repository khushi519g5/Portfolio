import React, { useState } from 'react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  // Skill Categories
  const skillCategories = [
    { title: "Languages", skills: ["C", "C++", "Python", "JavaScript", "SQL"] },
    { title: "Frontend", skills: ["React", "HTML", "CSS", "Bootstrap", "Tailwind CSS"] },
    { title: "Backend", skills: ["Node.js", "Express", "FastAPI", "REST APIs"] },
    { title: "Database", skills: ["MongoDB", "MySQL"] },
    { title: "AI / ML", skills: ["TensorFlow", "Keras", "Scikit-learn", "OpenCV"] }
  ];

  // Enhanced Projects
  const projects = [
    {
      title: "Cloudora",
      category: "Full Stack",
      description: "Secure cloud-based resource sharing platform tailored for students and researchers.",
      features: [
        "JWT Authentication & Role-Based Access Control",
        "High-performance file upload and asset sharing pipeline",
        "Real-time notifications & activity feed",
        "Dynamic tag search, instant filtering & indexing",
        "Fully responsive glassmorphism UI"
      ],
      tags: ["React", "Node.js", "MongoDB", "Express"],
      demoLink: "https://cloud-student-resource-platform-frontend-i5yf.onrender.com/",
      githubLink: "https://github.com/khushi519g5/cloud-student-resource-platform.git",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Alzheimer's Disease Classification",
      category: "AI / ML",
      description: "Deep learning computer vision system designed to classify Alzheimer's stages from MRI scans.",
      features: [
        "Convolutional Neural Networks (CNN) using TensorFlow/Keras",
        "High classification accuracy on validation datasets",
        "FastAPI backend for low-latency inference endpoints",
        "Interactive web dashboard for uploading MRI scans"
      ],
      tags: ["Python", "TensorFlow", "Keras", "FastAPI"],
       demoLink: "https://github.com/khushi519g5/Hybrid-Alzheimers-Prediction.git",
      githubLink: "https://github.com/khushi519g5/Hybrid-Alzheimers-Prediction.git",
      image: "https://plus.unsplash.com/premium_photo-1672759455415-34366f0a658a?q=80&w=1416&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "EatLystic",
      category: "Full Stack",
      description: "Smart restaurant and recipe discovery app featuring intuitive filtering and ratings.",
      features: [
        "Interactive map & location-based filtering",
        "Custom recipe creation & user reviews",
        "Fast SQL queries for complex menu searches",
        "Sleek mobile-first interface"
      ],
      tags: ["React", "FastAPI", "SQL", "Bootstrap"],
      demoLink: "https://eatlystic-fork-frontend.onrender.com/",
      githubLink: "https://github.com/khushi519g5/EatLystic_fork.git",
      image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80"
    },
    {
  title: "Culinary Haven",
  category: "Full Stack",
  description: "A community recipe-sharing platform for food enthusiasts to discover, curate, and share custom recipes.",
  features: [
    "User authentication & profile creation",
    "Dynamic recipe creation with step-by-step guides",
    "Categorized search & cuisine filtering",
    "Interactive rating and review system"
  ],
  tags: ["React", "Express.js", "MongoDB", "Node.js"],
    demoLink: "https://github.com/khushi519g5/Culinary-Haven.git",
  githubLink: "https://github.com/khushi519g5/Culinary-Haven.git",
  image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80"
}
  ];

  // Measurable Experience
  const experiences = [
  {
    role: "AI & Prompt Engineering Intern",
    company: "VaultofCodes",
    period: "June 2026 – July 2026",
    points: [
      "Explored AI workflows and prompt engineering techniques to improve LLM-based task automation and response generation.",
      "Designed and tested effective prompts for AI applications, focusing on improving output quality and consistency.",
      "Worked with AI tools and development workflows to understand practical applications of generative AI."
    ]
  },
  {
    role: "Web Development Intern",
    company: "AD Infocom Systems",
    period: "June 2025 – July 2025",
    points: [
      "Developed responsive web components and implemented frontend features using modern web technologies.",
      "Built and integrated RESTful APIs using Express.js and MongoDB for web application functionality.",
      "Collaborated using Git/GitHub workflows and followed software development practices during project implementation."
    ]
  }
];

  // Achievements List
  const achievements = [
    { icon: "🧩", title: "100+ LeetCode Problems Solved", desc: "Strong foundation in Data Structures, Algorithms, and logical problem solving." },
    { icon: "🎓", title: "Top Academic Performer", desc: "Maintained a high CGPA of 8.85/10 across rigorous engineering coursework." },
    { icon: "💼", title: "2 Practical Internships", desc: "Hands-on industry experience building Web & AI systems." },
    { icon: "🚀", title: "4+ Full-Stack & ML Applications", desc: "Designed, developed, and deployed production-ready software solutions." }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <>
      <style>{`
        /* Reset & Base Variables */
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          scroll-behavior: smooth;
        }

        :root {
          --bg-dark: #0b0f19;
          --card-bg: rgba(15, 23, 42, 0.5);
          --card-border: rgba(30, 41, 59, 0.8);
          --accent-cyan: #22d3ee;
          --accent-blue: #38bdf8;
          --text-main: #f8fafc;
          --text-muted: #94a3b8;
        }

        body {
          background-color: var(--bg-dark);
          color: var(--text-main);
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
        }

        /* Background Glows */
        .bg-glow-container {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .bg-glow-1 {
          position: absolute;
          top: -150px;
          left: -150px;
          width: 450px;
          height: 450px;
          background: rgba(34, 211, 238, 0.08);
          border-radius: 50%;
          filter: blur(90px);
        }

        .bg-glow-2 {
          position: absolute;
          top: 40%;
          right: -150px;
          width: 450px;
          height: 450px;
          background: rgba(129, 140, 248, 0.08);
          border-radius: 50%;
          filter: blur(90px);
        }

        /* Layout Container */
        .portfolio-container {
          position: relative;
          z-index: 10;
          max-width: 1080px;
          margin: 0 auto;
          padding: 32px 24px;
          display: flex;
          flex-direction: column;
          gap: 80px;
        }

        /* Navigation */
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 28px;
          background-color: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--card-border);
          border-radius: 20px;
          position: sticky;
          top: 20px;
          z-index: 100;
        }

        .logo {
          font-size: 1.25rem;
          font-weight: 800;
          background: linear-gradient(to right, #22d3ee, #818cf8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .nav-links {
          display: flex;
          gap: 20px;
        }

        .nav-link {
          color: var(--text-muted);
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 500;
          transition: color 0.2s ease;
        }

        .nav-link:hover {
          color: var(--accent-cyan);
        }

        /* Hero Section */
        .hero-section {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding-top: 20px;
        }

        .hero-greeting {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--accent-cyan);
        }

        .hero-name {
          font-size: 3.25rem;
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          font-weight: 700;
          background: linear-gradient(to right, #38bdf8, #818cf8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-bio {
          font-size: 1.05rem;
          color: var(--text-muted);
          max-width: 720px;
          line-height: 1.7;
        }

        .hero-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          font-size: 0.9rem;
          color: #cbd5e1;
          background: rgba(15, 23, 42, 0.4);
          padding: 12px 20px;
          border-radius: 12px;
          border: 1px solid var(--card-border);
          width: fit-content;
        }

        .hero-meta-item {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .cta-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          padding-top: 10px;
        }

        .btn {
          padding: 12px 22px;
          border-radius: 12px;
          font-size: 0.9rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          border: none;
        }

        .btn-primary {
          background-color: var(--accent-cyan);
          color: #020617;
          box-shadow: 0 4px 14px rgba(34, 211, 238, 0.25);
        }

        .btn-primary:hover {
          background-color: #67e8f9;
          transform: translateY(-2px);
        }

        .btn-outline {
          background-color: rgba(30, 41, 59, 0.6);
          color: #e2e8f0;
          border: 1px solid var(--card-border);
        }

        .btn-outline:hover {
          background-color: rgba(51, 65, 85, 0.8);
          border-color: var(--accent-cyan);
          color: var(--accent-cyan);
          transform: translateY(-2px);
        }

        /* Quick Stats */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .stat-card {
          background-color: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 16px;
          padding: 20px;
          text-align: center;
          transition: transform 0.2s ease, border-color 0.2s ease;
        }

        .stat-card:hover {
          transform: translateY(-4px);
          border-color: rgba(34, 211, 238, 0.4);
        }

        .stat-number {
          font-size: 2.25rem;
          font-weight: 800;
          color: var(--accent-cyan);
          line-height: 1.2;
        }

        .stat-label {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        /* Section Header */
        .section-header {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 28px;
        }

        .section-title {
          font-size: 1.75rem;
          font-weight: 800;
          color: var(--text-main);
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .section-title::after {
          content: "";
          flex: 1;
          height: 1px;
          background: rgba(30, 41, 59, 0.8);
          margin-left: 10px;
        }

        /* About Section */
        .about-card {
          background-color: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 20px;
          padding: 28px;
          font-size: 1.05rem;
          color: #cbd5e1;
          line-height: 1.8;
        }

        /* Categorized Skills */
        .skills-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }

        .skill-category-card {
          background-color: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 16px;
          padding: 20px;
        }

        .category-title {
          font-size: 1rem;
          font-weight: 700;
          color: var(--accent-blue);
          margin-bottom: 12px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .chips-container {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .skill-chip {
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid rgba(51, 65, 85, 0.6);
          color: #e2e8f0;
          padding: 6px 14px;
          border-radius: 10px;
          font-size: 0.85rem;
          font-weight: 500;
          transition: all 0.2s ease;
        }

        .skill-chip:hover {
          border-color: var(--accent-cyan);
          color: var(--accent-cyan);
          box-shadow: 0 0 12px rgba(34, 211, 238, 0.2);
          transform: translateY(-2px);
        }

        /* Projects Section */
        .filter-tabs {
          display: flex;
          gap: 8px;
          background: rgba(15, 23, 42, 0.6);
          padding: 4px;
          border-radius: 12px;
          border: 1px solid var(--card-border);
          width: fit-content;
          margin-bottom: 24px;
        }

        .filter-tab {
          padding: 6px 14px;
          font-size: 0.8rem;
          font-weight: 600;
          border-radius: 8px;
          border: none;
          background: transparent;
          color: var(--text-muted);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .filter-tab.active {
          background-color: var(--accent-cyan);
          color: #020617;
        }

        .projects-list {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
        }

        .project-card {
          background-color: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 20px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-6px);
          border-color: rgba(51, 65, 85, 1);
        }

        .project-image {
          width: 100%;
          height: 220px;
          object-fit: cover;
          border-bottom: 1px solid var(--card-border);
        }

        .project-content {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .project-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--text-main);
        }

        .project-category {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--accent-cyan);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .project-desc {
          font-size: 0.95rem;
          color: var(--text-muted);
        }

        .features-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 6px;
          background: rgba(15, 23, 42, 0.4);
          padding: 12px 16px;
          border-radius: 12px;
          border: 1px solid rgba(30, 41, 59, 0.5);
        }

        .feature-item {
          font-size: 0.85rem;
          color: #cbd5e1;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .feature-item::before {
          content: "✔";
          color: var(--accent-cyan);
          font-size: 0.8rem;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tech-tag {
          font-family: monospace;
          font-size: 0.75rem;
          background: rgba(30, 41, 59, 0.6);
          color: var(--accent-blue);
          padding: 4px 10px;
          border-radius: 6px;
          border: 1px solid rgba(51, 65, 85, 0.4);
        }

        .project-actions {
          display: flex;
          gap: 12px;
          padding-top: 8px;
        }

        /* Experience Section */
        .experience-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .exp-card {
          background-color: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 16px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .exp-header {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .exp-role {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-main);
        }

        .exp-company {
          color: var(--accent-cyan);
        }

        .exp-period {
          font-size: 0.8rem;
          font-family: monospace;
          color: #64748b;
        }

        .exp-bullets {
          list-style-type: disc;
          list-style-position: inside;
          font-size: 0.9rem;
          color: var(--text-muted);
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        /* Education & Achievements */
        .edu-card {
          background-color: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 16px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .edu-degree {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text-main);
        }

        .edu-college {
          color: var(--accent-blue);
          font-size: 0.95rem;
          font-weight: 600;
        }

        .edu-meta {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-top: 4px;
        }

        .achievements-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }

        .achieve-card {
          background-color: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 16px;
          padding: 20px;
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }

        .achieve-icon {
          font-size: 1.75rem;
        }

        .achieve-title {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-main);
        }

        .achieve-desc {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        /* Contact Section */
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }

        .contact-card {
          background-color: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 16px;
          padding: 20px;
          display: flex;
          align-items: center;
          gap: 16px;
          text-decoration: none;
          color: inherit;
          transition: border-color 0.2s ease, transform 0.2s ease;
        }

        .contact-card:hover {
          border-color: var(--accent-cyan);
          transform: translateY(-2px);
        }

        .contact-icon {
          font-size: 1.5rem;
          color: var(--accent-cyan);
        }

        .contact-label {
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        .contact-val {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-main);
        }

        /* Footer */
        .footer {
          border-top: 1px solid var(--card-border);
          padding-top: 32px;
          text-align: center;
          font-size: 0.85rem;
          color: #64748b;
        }

        /* Responsive Breakpoints */
        @media (min-width: 640px) {
          .stats-grid {
            grid-template-columns: repeat(4, 1fr);
          }
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .achievements-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .contact-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 768px) {
          .hero-name {
            font-size: 4rem;
          }
          .projects-list {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>

      {/* --- Ambient Lighting --- */}
      <div className="bg-glow-container">
        <div className="bg-glow-1" />
        <div className="bg-glow-2" />
      </div>

      {/* --- Main Portfolio Content --- */}
      <div className="portfolio-container">
        
        {/* Navigation Bar */}
        <nav className="navbar">
          <span className="logo">Khushi.dev</span>
          <div className="nav-links">
            <a href="#about" className="nav-link">About</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#experience" className="nav-link">Experience</a>
          
          </div>
        </nav>

        {/* 1. Hero Section */}
        <section className="hero-section">
          <span className="hero-greeting">Hi, I'm Khushi Mittal</span>
          <h1 className="hero-name">Full Stack Developer & AI/ML Enthusiast</h1>
          <p className="hero-subtitle">Building scalable web applications, AI-powered solutions & intuitive experiences.</p>
          
          <p className="hero-bio">
            I craft full-stack systems using <strong>React, Node.js, FastAPI, MongoDB,</strong> and <strong>TensorFlow</strong>. Passionate about software architecture, modern web standards, and intelligent machine learning applications.
          </p>

          <div className="hero-meta">
            <div className="hero-meta-item">📍 Chandigarh, India</div>
            <div className="hero-meta-item">🎓 B.E. Computer Science (2023–2027)</div>
            <div className="hero-meta-item">⭐ CGPA: 8.98</div>
          </div>

          <div className="cta-buttons">
         <a 
  href="/Resume_khushi.pdf" 
  download="Khushi_Mittal_Resume.pdf" 
  className="btn btn-primary"
>
  📄 Download Resume
</a>
            <a href="https://github.com/khushi519g5" target="_blank" rel="noreferrer" className="btn btn-outline">💻 GitHub</a>
            <a href="https://linkedin.com/in/khushi-mittal-136785358" target="_blank" rel="noreferrer" className="btn btn-outline">🔗 LinkedIn</a>
          </div>
        </section>

        {/* 2. Quick Statistics */}
        <section className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">4+</div>
            <div className="stat-label">Major Projects</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">2</div>
            <div className="stat-label">Internships</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">85+</div>
            <div className="stat-label">LeetCode Solved</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">8.85</div>
            <div className="stat-label">Academic CGPA</div>
          </div>
        </section>

        {/* 3. About Me */}
        <section id="about">
          <div className="section-header">
            <h2 className="section-title">About Me</h2>
          </div>
          <div className="about-card">
            I am a Computer Science undergraduate passionate about Full Stack Development and Artificial Intelligence. I enjoy designing scalable backend systems, building responsive interfaces, and applying machine learning to solve real-world problems. Currently seeking Software Development Engineer (SDE) and AI/ML opportunities.
          </div>
        </section>

        {/* 4. Categorized Skills */}
        <section id="skills">
          <div className="section-header">
            <h2 className="section-title">Technical Skills</h2>
          </div>
          <div className="skills-grid">
            {skillCategories.map((cat, idx) => (
              <div key={idx} className="skill-category-card">
                <div className="category-title">{cat.title}</div>
                <div className="chips-container">
                  {cat.skills.map((s, sIdx) => (
                    <span key={sIdx} className="skill-chip">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Featured Projects */}
        <section id="projects">
          <div className="section-header">
            <h2 className="section-title">Featured Projects</h2>
          </div>

          <div className="filter-tabs">
            {['All', 'Full Stack', 'AI / ML'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`filter-tab ${activeFilter === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="projects-list">
            {filteredProjects.map((p, idx) => (
              <div key={idx} className="project-card">
                <img src={p.image} alt={p.title} className="project-image" />
                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-title">{p.title}</h3>
                    <span className="project-category">{p.category}</span>
                  </div>
                  
                  <p className="project-desc">{p.description}</p>

                  <ul className="features-list">
                    {p.features.map((feat, fIdx) => (
                      <li key={fIdx} className="feature-item">{feat}</li>
                    ))}
                  </ul>

                  <div className="tech-tags">
                    {p.tags.map((t, tIdx) => (
                      <span key={tIdx} className="tech-tag">{t}</span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <a href={p.demoLink} className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.8rem' }}>Live Demo</a>
                    <a href={p.githubLink} className="btn btn-outline" style={{ padding: '8px 16px', fontSize: '0.8rem' }}>GitHub</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Experience */}
        <section id="experience">
          <div className="section-header">
            <h2 className="section-title">Practical Experience</h2>
          </div>
          <div className="experience-list">
            {experiences.map((exp, idx) => (
              <div key={idx} className="exp-card">
                <div className="exp-header">
                  <div className="exp-role">{exp.role} <span className="exp-company">@ {exp.company}</span></div>
                  <div className="exp-period">{exp.period}</div>
                </div>
                <ul className="exp-bullets">
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Education */}
        <section id="education">
          <div className="section-header">
            <h2 className="section-title">Education</h2>
          </div>
          <div className="edu-card">
            <div className="edu-degree">Bachelor of Engineering : Computer Science & Engineering</div>
            <div className="edu-college">Chandigarh College of Engineering & Technology</div>
            <div className="edu-meta">
              <span>2023 – 2027</span>
              <span><strong>CGPA:</strong> 8.85 / 10.0</span>
            </div>
          </div>
        </section>

        {/* 8. Key Achievements */}
        <section id="achievements">
          <div className="section-header">
            <h2 className="section-title">Key Achievements</h2>
          </div>
          <div className="achievements-grid">
            {achievements.map((a, idx) => (
              <div key={idx} className="achieve-card">
                <div className="achieve-icon">{a.icon}</div>
                <div>
                  <div className="achieve-title">{a.title}</div>
                  <div className="achieve-desc">{a.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 9. Detailed Contact */}
        <section id="contact">
          <div className="section-header">
            <h2 className="section-title">Get In Touch</h2>
          </div>
          <div className="contact-grid">
            <a href="mailto:mittalkhushi97@gmail.com" className="contact-card">
              <span className="contact-icon">📧</span>
              <div>
                <div className="contact-label">Email</div>
                <div className="contact-val">mittalkhushi97@gmail.com</div>
              </div>
            </a>
            <div className="contact-card">
              <span className="contact-icon">📍</span>
              <div>
                <div className="contact-label">Location</div>
                <div className="contact-val">Chandigarh, India</div>
              </div>
            </div>
            <a href="https://linkedin.com/in/khushi-mittal-136785358" target="_blank" rel="noreferrer" className="contact-card">
              <span className="contact-icon">🔗</span>
              <div>
                <div className="contact-label">Social</div>
                <div className="contact-val">LinkedIn Profile</div>
              </div>
            </a>
          </div>
        </section>

        {/* 11. Custom Footer */}
        <footer className="footer">
          © {new Date().getFullYear()} Khushi Mittal. Designed & Developed with React & Vanilla CSS.
        </footer>

      </div>
    </>
  );
};

export default Portfolio;
