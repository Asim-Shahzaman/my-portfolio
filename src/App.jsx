import React, { useState } from 'react';

export default function App() {
  const [copied, setCopied] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const email = "asim.shahzaman.01@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const projects = [
    {
      title: "ShopSphere — Modern E-Commerce Platform",
      desc: "A sleek, responsive online storefront with real-time product filtering, dynamic cart management, and seamless category navigation.",
      tech: ["React.js", "Tailwind CSS", "Context API"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "DevPulse — Developer Productivity Suite",
      desc: "An intuitive task & productivity management dashboard featuring kanban boards, focus metrics, and persistent storage.",
      tech: ["React.js", "JavaScript", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "WeatherWave — Real-Time Forecast Portal",
      desc: "Interactive global weather app with live forecasts, precipitation charts, and responsive climate cards.",
      tech: ["React.js", "REST API", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  const skills = [
    { name: "HTML5", desc: "Semantic markup, modern forms, accessibility, and SEO structure." },
    { name: "CSS3", desc: "Modern Flexbox, CSS Grid, keyframes, responsive layouts, and Tailwind." },
    { name: "JavaScript", desc: "ES6+, async/await, DOM APIs, modern data structures, and event handling." },
    { name: "React.js", desc: "Hooks, component architecture, state management, and SPA flows." },
    { name: "Responsive Design", desc: "Mobile-first layouts, cross-browser compatibility, and fluid viewports." },
    { name: "Git & GitHub", desc: "Version control, feature branching, clean commits, and collaboration." }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-600 selection:text-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#hero" className="font-bold text-lg text-slate-100 hover:text-blue-400 transition-colors">
            Asim<span className="text-blue-500">.dev</span>
          </a>
          <nav className="flex items-center gap-6 text-sm font-medium">
            <a href="#about" className="text-slate-400 hover:text-white transition-colors">About</a>
            <a href="#skills" className="text-slate-400 hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="text-slate-400 hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all shadow-md shadow-blue-600/30">Hire Me</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="hero" className="py-24 px-4 text-center max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-950 text-indigo-300 border border-indigo-800">
              🎓 BS Software Engineering Student
            </span>
            <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-950 text-blue-300 border border-blue-800">
              🟢 Available for Full-Time Roles
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4 text-white">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Asim Shahzaman</span>
          </h1>

          <h2 className="text-xl sm:text-2xl text-slate-300 font-semibold mb-6">
            Building Modern &amp; User-Friendly Websites
          </h2>

          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            I am a <strong className="text-white">BS Software Engineering student</strong> and <strong className="text-blue-400">Front-End Web Developer</strong> based in Muzaffarabad, Azad Kashmir, Pakistan. Focused on crafting responsive, robust, and clean web applications.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="#projects" className="px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-600/30 transition-all">
              View My Work
            </a>
            <a href="#contact" className="px-7 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold transition-all">
              Contact Me
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 max-w-5xl mx-auto border-t border-slate-900">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">About Me</h2>
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 max-w-3xl mx-auto space-y-4 text-slate-300 leading-relaxed">
            <p>
              I am a dedicated <strong className="text-white">BS Software Engineering student</strong> combining rigorous software engineering foundations with practical web development skills.
            </p>
            <p>
              My tech stack focuses on <strong className="text-blue-400">React.js, JavaScript (ES6+), HTML5, CSS3, and Tailwind CSS</strong>. I prioritize creating pixel-perfect, mobile-first designs with clean code structure.
            </p>
            <p>
              My goal is to secure a <strong className="text-white">Full-Time Web Developer role</strong> where I can build impactful products and contribute effectively from day one.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 max-w-5xl mx-auto border-t border-slate-900">
          <h2 className="text-3xl font-bold text-center mb-10 text-white">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-all">
                <h3 className="text-lg font-bold text-white mb-2">{skill.name}</h3>
                <p className="text-sm text-slate-400">{skill.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 max-w-5xl mx-auto border-t border-slate-900">
          <h2 className="text-3xl font-bold text-center mb-10 text-white">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((proj, i) => (
              <div key={i} className="rounded-2xl bg-slate-900/60 border border-slate-800 overflow-hidden flex flex-col">
                <img src={proj.image} alt={proj.title} className="w-full h-44 object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-bold text-white mb-2">{proj.title}</h3>
                  <p className="text-sm text-slate-400 mb-4 flex-grow">{proj.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {proj.tech.map((t, idx) => (
                      <span key={idx} className="px-2 py-0.5 text-xs bg-slate-800 text-slate-300 rounded border border-slate-700">{t}</span>
                    ))}
                  </div>
                  <button onClick={() => setSelectedProject(proj)} className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all">
                    Live Demo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 max-w-4xl mx-auto border-t border-slate-900 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Get In Touch</h2>
          <p className="text-slate-400 mb-8">Ready to collaborate or discuss a full-time role? Let's connect.</p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button onClick={handleCopy} className="px-5 py-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200 text-sm font-semibold transition-all">
              {copied ? "Copied Email!" : "Copy Email"}
            </button>
            <a href="https://linkedin.com/in/asim-shahzaman" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-800 hover:bg-blue-600 hover:text-white text-sm font-semibold transition-all">
              LinkedIn
            </a>
            <a href="https://github.com/Asim-Shahzaman" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-200 text-sm font-semibold transition-all">
              GitHub
            </a>
            <a href={`mailto:${email}`} className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all">
              Send Email
            </a>
          </div>
        </section>
      </main>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 text-left">
            <h3 className="text-lg font-bold text-white mb-2">{selectedProject.title}</h3>
            <p className="text-sm text-slate-400 mb-4">{selectedProject.desc}</p>
            <button onClick={() => setSelectedProject(null)} className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl text-sm transition-all">
              Close Preview
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-900 py-6 text-center text-xs text-slate-500">
        © Asim Shahzaman • Built with React &amp; Tailwind CSS
      </footer>
    </div>
  );
}
