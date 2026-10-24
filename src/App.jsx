import React, { useState } from 'react';

export default function App() {
  const [copied, setCopied] = useState(false);
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
      title: "High-Converting Landing Pages",
      desc: "Fast, responsive landing pages crafted to convert visitors into leads, subscribers, or buyers. Optimized for performance and SEO.",
      tag: "Conversion-Focused"
    },
    {
      title: "React.js Web Applications",
      desc: "Dynamic, scalable single-page applications with clean component hierarchy, reactive state management, and modern workflows.",
      tag: "Modern Stack"
    },
    {
      title: "UI/UX Redesign & Modernization",
      desc: "Transforming slow, outdated websites into clean, modern dark/light interfaces that work seamlessly across mobile, tablet, and desktop.",
      tag: "Mobile-First"
    }
  ];

  const projects = [
    {
      title: "ShopSphere — Modern E-Commerce Platform",
      desc: "A sleek, responsive online storefront with real-time product filtering, dynamic cart management, and seamless category navigation.",
      tech: ["React.js", "Tailwind CSS", "Context API"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1200&q=80",
      status: "In Development",
      sourceUrl: githubUrl
    },
    {
      title: "DevPulse — Developer Productivity Suite",
      desc: "An intuitive task & productivity management dashboard featuring kanban boards, focus metrics, and persistent storage.",
      tech: ["React.js", "JavaScript", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      status: "In Development",
      sourceUrl: githubUrl
    },
    {
      title: "WeatherWave — Real-Time Forecast Portal",
      desc: "Interactive global weather app with live forecasts, precipitation charts, and responsive climate cards.",
      tech: ["React.js", "REST API", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=1200&q=80",
      status: "In Development",
      sourceUrl: githubUrl
    }
  ];

  const faqs = [
    {
      q: "What is your typical project delivery turnaround?",
      a: "Standard landing pages and showcase websites take 3 to 7 business days. Complex React applications and multi-step interfaces take 1 to 3 weeks depending on specifications."
    },
    {
      q: "How do we collaborate across international time zones?",
      a: "I work with global clients asynchronously via Email, LinkedIn, Slack, and scheduled video check-ins to ensure regular updates and zero delays."
    },
    {
      q: "Are all websites mobile-optimized and responsive?",
      a: "Yes. Every website is built mobile-first, ensuring high performance and pixel-perfect rendering across phones, tablets, laptops, and ultra-wide screens."
    }
  ];

  const skills = [
    { name: "React.js", desc: "Hooks, functional architecture, state management, and modern component lifecycle." },
    { name: "Tailwind CSS", desc: "Utility-first CSS, custom design systems, responsive breakpoints, and dark mode." },
    { name: "JavaScript (ES6+)", desc: "Modern syntax, asynchronous APIs, DOM manipulation, and performance optimization." },
    { name: "HTML5 & Semantic SEO", desc: "Accessible markup, structured data, web standards, and high search visibility." },
    { name: "Responsive UI/UX", desc: "Fluid layouts, cross-browser support, touch-friendly navigation, and micro-interactions." },
    { name: "Git & GitHub", desc: "Version control, collaborative workflows, and automated deployment pipelines." }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-600 selection:text-white">
      {/* Navigation */}
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
              Hire Me
            </a>
          </nav>
          <a href="#contact" className="md:hidden px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-semibold">
            Contact
          </a>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="hero" className="py-24 px-4 text-center max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-950 text-emerald-300 border border-emerald-800">
              🟢 Available for International Client Work
            </span>
            <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-950 text-indigo-300 border border-indigo-800">
              🎓 BS Software Engineering
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 text-white leading-tight">
            I Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">High-Converting Websites</span> for Growing Businesses
          </h1>

          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Front-End Web Developer specializing in custom React.js and Tailwind CSS websites. Helping founders, businesses, and agencies turn web traffic into revenue.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="#contact" className="px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-600/30 transition-all">
              Start a Project
            </a>
            <a href="#projects" className="px-7 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold transition-all">
              View Showcase
            </a>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-4 max-w-5xl mx-auto border-t border-slate-900">
          <div className="text-center mb-12">
            <h2 className="text-xs uppercase tracking-widest text-blue-400 font-semibold mb-2">What I Offer</h2>
            <h3 className="text-3xl font-bold text-white">Services Tailored for International Clients</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((srv, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/50 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-950 text-blue-300 border border-blue-800 mb-4 inline-block">
                    {srv.tag}
                  </span>
                  <h4 className="text-lg font-bold text-white mb-2">{srv.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{srv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Projects */}
        <section id="projects" className="py-20 px-4 max-w-5xl mx-auto border-t border-slate-900">
          <div className="text-center mb-12">
            <h2 className="text-xs uppercase tracking-widest text-blue-400 font-semibold mb-2">Proof of Work</h2>
            <h3 className="text-3xl font-bold text-white">Featured Project Showcase</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((proj, i) => (
              <div key={i} className="rounded-2xl bg-slate-900/60 border border-slate-800 overflow-hidden flex flex-col">
                <img src={proj.image} alt={proj.title} className="w-full h-44 object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-blue-950 text-blue-400 border border-blue-800">
                      {proj.status}
                    </span>
                  </div>
                  <h4 className="font-bold text-white mb-2">{proj.title}</h4>
                  <p className="text-sm text-slate-400 mb-4 flex-grow">{proj.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {proj.tech.map((t, idx) => (
                      <span key={idx} className="px-2 py-0.5 text-xs bg-slate-800 text-slate-300 rounded border border-slate-700">{t}</span>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button 
                      onClick={() => setSelectedProject(proj)} 
                      className="w-full py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs transition-all"
                    >
                      Scope
                    </button>
                    <a 
                      href={proj.sourceUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-full py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-all text-center flex items-center justify-center"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Skills */}
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
            Ready to build a website that delivers results? Contact me directly using your preferred channel:
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
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

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 text-left shadow-2xl">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-950 text-blue-400 border border-blue-800">
                {selectedProject.status}
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{selectedProject.title}</h3>
            <p className="text-sm text-slate-300 mb-4 leading-relaxed">{selectedProject.desc}</p>
            
            <div className="mb-6 p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400">
              <p className="font-medium text-slate-300 mb-1">Architecture &amp; Scope:</p>
              Built using modular components, responsive Tailwind CSS layouts, and clean Git commits.
            </div>

            <div className="flex gap-3">
              <a 
                href={selectedProject.sourceUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-1/2 py-2 text-center bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl text-sm transition-all"
              >
                GitHub Profile
              </a>
              <button 
                onClick={() => setSelectedProject(null)} 
                className="w-1/2 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold rounded-xl text-sm transition-all border border-slate-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-900 py-6 text-center text-xs text-slate-500">
        © Asim Shahzaman • Front-End React Developer
      </footer>
    </div>
  );
}
