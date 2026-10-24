import React, { useState } from 'react';

export default function App() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const email = "asim.shahzaman.01@gmail.com";
  const linkedInUrl = "https://www.linkedin.com/in/asimshahzaman";
  const githubUrl = "https://github.com/Asim-Shahzaman";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const services = [
    {
      title: "Business & Landing Pages",
      desc: "Fast, high-converting websites designed to turn visitors into leads and paying customers. Optimized for speed, mobile responsiveness, and SEO.",
      tag: "High Conversion",
      icon: "🚀"
    },
    {
      title: "Custom React Web Apps",
      desc: "Scalable, dynamic single-page applications built with React.js, clean component structures, and seamless state management.",
      tag: "Modern Architecture",
      icon: "⚡"
    },
    {
      title: "UI/UX Redesign & Modernization",
      desc: "Upgrading outdated or slow websites into clean, modern dark/light interfaces that work smoothly across all screen sizes.",
      tag: "Mobile-First",
      icon: "✨"
    }
  ];

  const projects = [
    {
      id: 1,
      title: "ShopSphere — E-Commerce Storefront",
      category: "web-app",
      desc: "A responsive online storefront featuring dynamic category filtering, instant cart calculations, and a streamlined mobile checkout flow.",
      tech: ["React.js", "Tailwind CSS", "Context API"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1200&q=80",
      features: [
        "Real-time item search & category filtering",
        "Dynamic shopping cart with persistent totals",
        "Mobile-first responsive drawer navigation",
        "Optimized checkout preview interface"
      ],
      metrics: "Sub-1s page load • 100% mobile responsive"
    },
    {
      id: 2,
      title: "DevPulse — SaaS Productivity Suite",
      category: "web-app",
      desc: "A developer management dashboard featuring task tracking boards, focus timer metrics, and dark-mode data visualizations.",
      tech: ["React.js", "JavaScript (ES6+)", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      features: [
        "Interactive drag-style task column management",
        "Focus productivity metrics and visual indicators",
        "Local state preservation across browser sessions",
        "High-contrast accessible dark interface"
      ],
      metrics: "Clean modular components • Zero layout shift"
    },
    {
      id: 3,
      title: "WeatherWave — Real-Time Forecast Portal",
      category: "api",
      desc: "An interactive global weather portal fetching live climate metrics, precipitation forecasts, and hourly condition graphs.",
      tech: ["React.js", "REST APIs", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=1200&q=80",
      features: [
        "Live asynchronous API data integration",
        "Dynamic weather condition badge themes",
        "Geolocation-based weather cards",
        "Instant search with responsive error handling"
      ],
      metrics: "Asynchronous REST caching • Clean UI"
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  const skills = [
    { name: "React.js", desc: "Hooks, SPA routing, state management, and modern component lifecycle." },
    { name: "Tailwind CSS", desc: "Utility-first CSS, custom design systems, responsive breakpoints, and modern dark themes." },
    { name: "JavaScript (ES6+)", desc: "Async/await, DOM manipulation, modular architecture, and modern ES features." },
    { name: "HTML5 & Semantic Web", desc: "Accessible markup, clean structure, metadata optimization, and web accessibility standards." },
    { name: "Mobile-First Design", desc: "Pixel-perfect scaling across phones, tablets, and wide desktop displays." },
    { name: "Git & Version Control", desc: "Branching strategies, clean commit discipline, and GitHub CI/CD deployments." }
  ];

  const faqs = [
    {
      q: "What is your typical delivery timeline?",
      a: "Standard landing pages and business showcase websites are typically completed within 3 to 7 business days. Custom React applications and interactive dashboards take between 1 to 3 weeks depending on the feature scope."
    },
    {
      q: "Do you work with clients both locally in Pakistan and internationally?",
      a: "Yes. I collaborate with business founders, startups, and agencies globally. We communicate via WhatsApp, Email, LinkedIn, or scheduled video calls to ensure fast, clear progress."
    },
    {
      q: "Will my website look good and load fast on mobile devices?",
      a: "Every project is built strictly mobile-first with clean, lightweight Tailwind CSS. Your website will be fast, responsive, and seamless on every smartphone, tablet, and PC."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-600 selection:text-white">
      {/* Navigation Header */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#hero" className="font-bold text-lg text-slate-100 hover:text-blue-400 transition-colors">
            Asim<span className="text-blue-500">.dev</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#services" className="text-slate-400 hover:text-white transition-colors">Services</a>
            <a href="#projects" className="text-slate-400 hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="text-slate-400 hover:text-white transition-colors">Skills</a>
            <a href="#faq" className="text-slate-400 hover:text-white transition-colors">FAQ</a>
            <a href="#contact" className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all shadow-md shadow-blue-600/30">
              Start a Project
            </a>
          </nav>
          <a href="#contact" className="md:hidden px-3.5 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-semibold">
            Contact
          </a>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="hero" className="py-24 px-4 text-center max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-950 text-emerald-300 border border-emerald-800">
              🟢 Available for Global Projects &amp; Remote Roles
            </span>
            <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-950 text-blue-300 border border-blue-800">
              💻 Front-End &amp; React Specialist
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 text-white leading-tight">
            Building Fast, High-Converting <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Websites &amp; Web Applications</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            I am a <strong className="text-white">Software Engineer &amp; Front-End Developer</strong> specializing in React.js and modern Tailwind CSS. I help businesses, founders, and startups create clean, high-performance web experiences that convert.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="#contact" className="px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-600/30 transition-all">
              Discuss Your Project
            </a>
            <a href="#projects" className="px-7 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold transition-all">
              Explore Projects
            </a>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-4 max-w-5xl mx-auto border-t border-slate-900">
          <div className="text-center mb-12">
            <h2 className="text-xs uppercase tracking-widest text-blue-400 font-semibold mb-2">What I Deliver</h2>
            <h3 className="text-3xl font-bold text-white">Client-Focused Web Solutions</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((srv, i) => (
              <div key={i} className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/50 transition-all flex flex-col justify-between">
                <div>
                  <div className="text-3xl mb-4">{srv.icon}</div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-950 text-blue-300 border border-blue-800 mb-3 inline-block">
                    {srv.tag}
                  </span>
                  <h4 className="text-xl font-bold text-white mb-2">{srv.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{srv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 max-w-5xl mx-auto border-t border-slate-900">
          <div className="text-center mb-8">
            <h2 className="text-xs uppercase tracking-widest text-blue-400 font-semibold mb-2">Portfolio</h2>
            <h3 className="text-3xl font-bold text-white">Featured Project Architecture</h3>
            <p className="text-sm text-slate-400 mt-2 max-w-lg mx-auto">
              Explore the technical capabilities, architecture, and feature sets of my recent web builds.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex justify-center gap-2 mb-10">
            <button 
              onClick={() => setActiveTab('all')} 
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${activeTab === 'all' ? 'bg-blue-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'}`}
            >
              All Projects
            </button>
            <button 
              onClick={() => setActiveTab('web-app')} 
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${activeTab === 'web-app' ? 'bg-blue-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'}`}
            >
              Web Applications
            </button>
            <button 
              onClick={() => setActiveTab('api')} 
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${activeTab === 'api' ? 'bg-blue-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'}`}
            >
              API Integrations
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredProjects.map((proj) => (
              <div key={proj.id} className="rounded-2xl bg-slate-900/60 border border-slate-800 overflow-hidden flex flex-col group hover:border-slate-700 transition-all">
                <div className="relative h-44 overflow-hidden">
                  <img src={proj.image} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="font-bold text-white mb-2 text-base">{proj.title}</h4>
                  <p className="text-xs text-slate-400 mb-4 flex-grow leading-relaxed">{proj.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {proj.tech.map((t, idx) => (
                      <span key={idx} className="px-2 py-0.5 text-[11px] bg-slate-800 text-slate-300 rounded border border-slate-700">{t}</span>
                    ))}
                  </div>
                  <button 
                    onClick={() => setSelectedProject(proj)} 
                    className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-all shadow-md shadow-blue-600/20"
                  >
                    View Project Breakdown
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Arsenal */}
        <section id="skills" className="py-20 px-4 max-w-5xl mx-auto border-t border-slate-900">
          <div className="text-center mb-12">
            <h2 className="text-xs uppercase tracking-widest text-blue-400 font-semibold mb-2">Capabilities</h2>
            <h3 className="text-3xl font-bold text-white">Technical Arsenal</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-all">
                <h4 className="text-lg font-bold text-white mb-2">{skill.name}</h4>
                <p className="text-sm text-slate-400">{skill.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 px-4 max-w-4xl mx-auto border-t border-slate-900">
          <div className="text-center mb-12">
            <h2 className="text-xs uppercase tracking-widest text-blue-400 font-semibold mb-2">Clarity</h2>
            <h3 className="text-3xl font-bold text-white">Frequently Asked Questions</h3>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
                <h4 className="font-bold text-white mb-2 text-base">{faq.q}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 max-w-4xl mx-auto border-t border-slate-900 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Let's Discuss Your Project</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Whether you are a startup in Pakistan or an international founder, I am ready to build your next website. Choose your preferred way to reach me:
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button 
              onClick={handleCopy} 
              className="px-5 py-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200 text-sm font-semibold transition-all"
            >
              {copied ? "Copied Email!" : "Copy Email"}
            </button>

            <a 
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all shadow-md shadow-blue-600/30"
            >
              Open in Gmail
            </a>

            <a 
              href={`mailto:${email}`} 
              className="px-5 py-3 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-200 text-sm font-semibold transition-all"
            >
              Default Mail App
            </a>

            <a 
              href={linkedInUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-5 py-3 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-800 hover:bg-blue-600 hover:text-white text-sm font-semibold transition-all"
            >
              LinkedIn Profile
            </a>

            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-5 py-3 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-200 text-sm font-semibold transition-all"
            >
              GitHub
            </a>
          </div>
        </section>
      </main>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 text-left shadow-2xl animate-fade-in">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-950 text-blue-400 border border-blue-800">
                Technical Architecture
              </span>
              <button 
                onClick={() => setSelectedProject(null)} 
                className="text-slate-400 hover:text-white text-lg font-bold"
              >
                ✕
              </button>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2">{selectedProject.title}</h3>
            <p className="text-sm text-slate-300 mb-4 leading-relaxed">{selectedProject.desc}</p>
            
            <div className="mb-4">
              <h5 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">Key Built Features:</h5>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {selectedProject.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-blue-400">✔</span> {feat}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6 p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs">
              <span className="text-slate-400">Performance Standard: </span>
              <span className="text-emerald-400 font-medium">{selectedProject.metrics}</span>
            </div>

            <div className="flex gap-3">
              <a 
                href="#contact" 
                onClick={() => setSelectedProject(null)} 
                className="w-full py-2.5 text-center bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl text-xs transition-all"
              >
                Inquire About a Similar Website
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-900 py-6 text-center text-xs text-slate-500">
        © Asim Shahzaman • Software Engineer &amp; Front-End Developer
      </footer>
    </div>
  );
}
