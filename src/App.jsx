import React, { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  ArrowRight, 
  ExternalLink, 
  Code2, 
  Briefcase, 
  Send,
  CheckCircle2,
  Menu,
  X
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const projects = [
    {
      title: 'ShopSphere — E-Commerce Platform',
      description: 'A sleek, responsive online storefront with real-time product filtering and dynamic cart management.',
      tech: ['React.js', 'Tailwind CSS', 'Context API'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80',
      live: '#',
      github: 'https://github.com/Asim-Shahzaman'
    },
    {
      title: 'DevPulse — Productivity Suite',
      description: 'An intuitive task management dashboard featuring drag-and-drop kanban boards and persistent storage.',
      tech: ['React.js', 'JavaScript', 'LocalStorage'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      live: '#',
      github: 'https://github.com/Asim-Shahzaman'
    },
    {
      title: 'WeatherWave — Forecast Portal',
      description: 'An interactive global weather intelligence app with live forecast charts and location search.',
      tech: ['React.js', 'REST API', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=800&q=80',
      live: '#',
      github: 'https://github.com/Asim-Shahzaman'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-600 selection:text-white antialiased scroll-smooth">
      
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <Code2 className="w-5 h-5" />
            </div>
            <span className="font-bold text-lg text-slate-100">Asim<span className="text-blue-500">.dev</span></span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-sm font-medium text-slate-400 hover:text-white transition">About</a>
            <a href="#projects" className="text-sm font-medium text-slate-400 hover:text-white transition">Projects</a>
            <a href="#contact" className="text-sm font-medium text-slate-400 hover:text-white transition">Contact</a>
            <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-blue-600 hover:bg-blue-500 text-white transition">
              <Briefcase className="w-4 h-4" />
              Hire Me
            </a>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-slate-400 hover:text-white">
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-800 bg-slate-950 p-4 space-y-4">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-white">About</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-white">Projects</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-white">Contact</a>
          </div>
        )}
      </nav>

      <main>
        {/* HERO SECTION */}
        <section id="hero" className="relative pt-20 pb-28 px-4 flex flex-col items-center text-center max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium bg-blue-950/60 text-blue-400 border border-blue-800/60 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Available for Full-Time Roles
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium bg-slate-900 text-slate-400 border border-slate-800">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              Muzaffarabad, Pakistan
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Hi, I'm <br className="md:hidden" />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Asim Shahzaman
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-300 mb-6">
            Building Modern & User-Friendly Websites
          </h2>
          
          <p className="text-lg text-slate-400 max-w-2xl mb-10 leading-relaxed">
            I'm a passionate <span className="text-white font-medium">Front-End Web Developer</span> crafting responsive, high-performance web applications with React.js and modern UI architecture.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#projects" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 hover:-translate-y-0.5 transition-all">
              View My Work <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900 border border-slate-800 hover:bg-slate-800 hover:-translate-y-0.5 transition-all">
              <Mail className="w-4 h-4 text-blue-400" /> Contact Me
            </a>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-20 px-4 border-t border-slate-900 bg-slate-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              I specialize in turning UI/UX wireframes into responsive, accessible web applications using <span className="text-blue-400 font-semibold">React.js</span>, <span className="text-blue-400 font-semibold">Tailwind CSS</span>, and modern JavaScript. My goal is to join a progressive team where I can build software that provides genuine delight to users.
            </p>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-20 px-4 border-t border-slate-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Projects</h2>
              <p className="text-slate-400">A showcase of responsive, component-driven web applications.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, idx) => (
                <div key={idx} className="group rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10">
                  <div className="relative h-48 overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white font-medium text-sm">View Details</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-sm text-slate-400 mb-4 h-16">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t, i) => (
                        <span key={i} className="px-2 py-1 text-xs font-medium bg-slate-800 text-slate-300 rounded-md border border-slate-700">{t}</span>
                      ))}
                    </div>
                    <div className="flex gap-3 pt-4 border-t border-slate-800">
                      <a href={project.live} className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition">
                        <ExternalLink className="w-4 h-4" /> Live
                      </a>
                      <a href={project.github} className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition">
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-20 px-4 border-t border-slate-900 bg-slate-900/20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Build Something Great</h2>
              <p className="text-slate-400">I am actively looking for a Full-Time Web Developer role.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-600/20 text-blue-400 rounded-lg"><MapPin /></div>
                    <div>
                      <p className="text-xs text-slate-400">Location</p>
                      <p className="text-sm font-medium">Muzaffarabad, Pakistan</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-600/20 text-blue-400 rounded-lg"><Mail /></div>
                    <div>
                      <p className="text-xs text-slate-400">Email</p>
                      <a href="mailto:asim.shahzaman.01@gmail.com" className="text-sm font-medium hover:text-blue-400">asim.shahzaman.01@gmail.com</a>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-800 flex gap-4">
                   <a href="https://linkedin.com/in/asimshahzaman" target="_blank" rel="noreferrer" className="p-3 bg-slate-800 rounded-lg hover:bg-blue-600 transition group"><Linkedin className="w-5 h-5 group-hover:text-white" /></a>
                   <a href="https://github.com/Asim-Shahzaman" target="_blank" rel="noreferrer" className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition group"><Github className="w-5 h-5 group-hover:text-white" /></a>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
                {formSubmitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                    <CheckCircle2 className="w-16 h-16 text-emerald-400" />
                    <h3 className="text-xl font-bold">Message Sent!</h3>
                    <p className="text-slate-400 text-sm">Thank you for reaching out. I will get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-2">Your Name</label>
                      <input type="text" required className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-blue-500 transition" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-2">Email Address</label>
                      <input type="email" required className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-blue-500 transition" placeholder="john@company.com" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-2">Message</label>
                      <textarea required rows="3" className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-blue-500 transition resize-none" placeholder="Describe the opportunity..."></textarea>
                    </div>
                    <button type="submit" className="w-full flex items-center justify-center gap-2 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition">
                      <Send className="w-4 h-4" /> Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-900 py-8 text-center text-sm text-slate-500 bg-slate-950">
        <p>© {new Date().getFullYear()} Asim Shahzaman. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
}