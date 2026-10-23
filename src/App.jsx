import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Mail, 
  MapPin, 
  Sparkles, 
  Code, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Target, 
  FileCode, 
  Paintbrush, 
  Atom, 
  Smartphone, 
  GitBranch, 
  Github, 
  Linkedin, 
  Eye, 
  X, 
  Check, 
  Copy, 
  Send, 
  ArrowUp, 
  Code2, 
  Briefcase, 
  Menu,
  GraduationCap
} from 'lucide-react';

// ==========================================
// 1. NAVBAR COMPONENT
// ==========================================

function Navbar({ activeSection = 'hero' }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a 
          href="#hero" 
          onClick={(e) => handleScroll(e, '#hero')}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-9 h-9 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm shadow-blue-500/20">
            <Code2 className="w-5 h-5" />
          </div>
          <span className="font-bold text-lg text-slate-100 group-hover:text-blue-400 transition-colors">
            Asim<span className="text-blue-500">.dev</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeSection === link.name.toLowerCase()
                  ? 'text-blue-400 bg-blue-500/10 border border-blue-500/30'
                  : 'text-slate-400 hover:text-slate-100 hover:bg-slate-900'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, '#contact')}
            className="ml-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Briefcase className="w-4 h-4" />
            <span>Hire Me</span>
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-900 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-slate-950/95 px-4 pt-2 pb-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                activeSection === link.name.toLowerCase()
                  ? 'text-blue-400 bg-blue-500/10'
                  : 'text-slate-400 hover:text-slate-100 hover:bg-slate-900'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, '#contact')}
            className="mt-2 block w-full text-center px-4 py-2.5 rounded-lg text-sm font-medium bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/25"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
}

// ==========================================
// 2. HERO COMPONENT
// ==========================================

function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative pt-16 pb-20 md:pt-24 md:pb-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="flex flex-col items-center text-center">
        {/* Availability, Education, and Location Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-indigo-950/70 text-indigo-300 border border-indigo-800/60 backdrop-blur-sm shadow-sm">
            <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
            <span>BS Software Engineering Student</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-blue-950/60 text-blue-400 border border-blue-800/60 backdrop-blur-sm shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Available for Full-Time Roles</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-slate-900/80 text-slate-400 border border-slate-800 backdrop-blur-sm">
            <MapPin className="w-3.5 h-3.5 text-blue-400" />
            <span>Muzaffarabad, Azad Kashmir, Pakistan</span>
          </div>
        </div>

        {/* Name with Gradient Accent */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Asim Shahzaman
          </span>
        </h1>

        {/* Headline */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-300 mb-6 max-w-3xl">
          Building Modern &amp; User-Friendly Websites
        </h2>

        {/* Bio */}
        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mb-10 leading-relaxed">
          I'm a <span className="text-slate-200 font-medium">BS Software Engineering student</span> and passionate <span className="text-slate-200 font-medium">Front-End Web Developer</span> crafting responsive, high-performance web applications with React.js and modern UI architecture. Dedicated to building smooth user journeys that turn complex ideas into seamless digital experiences.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={() => scrollTo('projects')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <span>View My Work</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <button
            onClick={() => scrollTo('contact')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 hover:text-white shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <Mail className="w-4 h-4 text-blue-400" />
            <span>Contact Me</span>
          </button>
        </div>

        {/* Tech Pills */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 w-full max-w-xl">
          <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase mb-4">
            Core Front-End Specialization
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {['React.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5 & CSS3', 'Responsive UI'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium rounded-lg bg-slate-900/70 border border-slate-800 text-slate-300 hover:border-blue-500/40 hover:text-blue-400 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 3. ABOUT COMPONENT
// ==========================================

function About() {
  const highlights = [
    {
      icon: <GraduationCap className="w-5 h-5 text-indigo-400" />,
      title: 'BS in Software Engineering',
      desc: 'Solid engineering groundwork in algorithms, data structures, software architecture, and modern web principles.',
    },
    {
      icon: <Layers className="w-5 h-5 text-blue-400" />,
      title: 'Clean & Modular Code',
      desc: 'Building reusable, decoupled components with predictable state and structured architecture.',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-cyan-400" />,
      title: 'Responsive & Pixel-Perfect',
      desc: 'Obsessed with fluid typography, flexible layouts, and flawless presentation across all viewports.',
    },
    {
      icon: <Cpu className="w-5 h-5 text-emerald-400" />,
      title: 'High-Impact Team Player',
      desc: 'Eager to collaborate with engineering teams, adopt agile workflows, and deliver business value.',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-900">
      <div className="flex flex-col items-center text-center mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-2">
          About Me
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Passionate About Coding &amp; Digital Craftsmanship
        </h2>
        <div className="w-12 h-1 bg-blue-500 rounded-full mt-4"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Story Card */}
        <div className="lg:col-span-7 bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm relative overflow-hidden group hover:border-slate-700 transition-all duration-300">
          <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/5 rounded-full blur-2xl pointer-events-none"></div>
          
          <h3 className="text-xl font-bold text-slate-100 mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-blue-400" />
            <span>My Journey &amp; Career Objective</span>
          </h3>

          <p className="text-slate-300 leading-relaxed mb-4">
            Hello! I'm <strong className="text-white">Asim Shahzaman</strong>, a web developer based in Muzaffarabad, Azad Kashmir, Pakistan. I am currently pursuing my <strong className="text-indigo-400">Bachelor of Science in Software Engineering (BSSE)</strong>, where I combine theoretical software engineering principles with practical, modern front-end development.
          </p>

          <p className="text-slate-300 leading-relaxed mb-4">
            My passion lies in turning UI/UX wireframes into responsive, accessible web applications using <strong className="text-blue-400">React.js</strong>, <strong className="text-blue-400">Tailwind CSS</strong>, and modern JavaScript. With my software engineering curriculum, I focus not just on visuals, but on semantic layout, clean code architecture, performance, and cross-browser reliability.
          </p>

          <p className="text-slate-300 leading-relaxed">
            My primary goal is to join a progressive development team in a <strong className="text-white underline decoration-blue-500 underline-offset-4">Full-Time Web Developer role</strong>. I am eager to apply my technical problem-solving skills, take ownership of front-end features, and build software that provides genuine delight to users.
          </p>
        </div>

        {/* Highlights Column */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-blue-500/40 hover:bg-slate-900/80 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60 group-hover:scale-110 group-hover:bg-blue-600/20 group-hover:border-blue-500/40 transition-all duration-300">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-base font-semibold text-slate-100 group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 4. SKILLS COMPONENT
// ==========================================

function Skills() {
  const skillsData = [
    {
      name: 'HTML5',
      category: 'Markup & Structure',
      level: 'Advanced',
      icon: <FileCode className="w-6 h-6 text-orange-400" />,
      border: 'hover:border-orange-500/50',
      description: 'Semantic markup, accessibility (ARIA), modern forms, and SEO-friendly document structuring.',
      tags: ['Semantic HTML', 'SEO', 'Web Accessibility'],
    },
    {
      name: 'CSS3',
      category: 'Styling & Layout',
      level: 'Advanced',
      icon: <Paintbrush className="w-6 h-6 text-blue-400" />,
      border: 'hover:border-blue-500/50',
      description: 'Flexbox, CSS Grid, custom keyframe animations, CSS variables, and modern Tailwind CSS utility workflow.',
      tags: ['Tailwind CSS', 'Flexbox & Grid', 'Animations'],
    },
    {
      name: 'JavaScript',
      category: 'Core Programming',
      level: 'Proficient',
      icon: <Code className="w-6 h-6 text-yellow-400" />,
      border: 'hover:border-yellow-500/50',
      description: 'ES6+ syntax, asynchronous JS (Promises, async/await), DOM manipulation, Fetch API, and event architecture.',
      tags: ['ES6+', 'Async / Await', 'DOM APIs'],
    },
    {
      name: 'React.js',
      category: 'Front-End Library',
      level: 'Proficient',
      icon: <Atom className="w-6 h-6 text-cyan-400" />,
      border: 'hover:border-cyan-500/50',
      description: 'Functional components, React Hooks (useState, useEffect, useMemo), state management, and reusable UI components.',
      tags: ['Hooks', 'SPA Architecture', 'State Flow'],
    },
    {
      name: 'Responsive Design',
      category: 'UI/UX & Viewports',
      level: 'Advanced',
      icon: <Smartphone className="w-6 h-6 text-emerald-400" />,
      border: 'hover:border-emerald-500/50',
      description: 'Mobile-first development methodology, fluid breakpoints, cross-browser compatibility, and touch-first usability.',
      tags: ['Mobile-First', 'Fluid Layouts', 'Cross-Browser'],
    },
    {
      name: 'Git',
      category: 'Version Control',
      level: 'Proficient',
      icon: <GitBranch className="w-6 h-6 text-rose-400" />,
      border: 'hover:border-rose-500/50',
      description: 'Distributed version control, branching strategies, commit cleanliness, merging, and collaborative GitHub workflows.',
      tags: ['GitHub', 'Branching', 'Collaboration'],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-900">
      <div className="flex flex-col items-center text-center mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-2">
          Skills &amp; Expertise
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Technical Toolkit
        </h2>
        <div className="w-12 h-1 bg-blue-500 rounded-full mt-4"></div>
        <p className="text-slate-400 mt-4 max-w-2xl text-sm sm:text-base">
          Proven foundation in modern front-end engineering, focused on producing clean, scalable code and engaging user interfaces.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className={`group p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/5 ${skill.border}`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-950/60 text-blue-400 border border-blue-800/50">
                {skill.level}
              </span>
            </div>

            <div className="mb-2">
              <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                {skill.category}
              </span>
              <h3 className="text-xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors">
                {skill.name}
              </h3>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              {skill.description}
            </p>

            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/60">
              {skill.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2 py-0.5 rounded-md text-xs font-medium bg-slate-800/50 text-slate-300 border border-slate-700/40"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ==========================================
// 5. PROJECTS COMPONENT
// ==========================================

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'shopsphere',
      title: 'ShopSphere — Modern E-Commerce Platform',
      shortDescription: 'A sleek, responsive online storefront with real-time product filtering, dynamic cart management, and seamless category navigation.',
      fullDescription: 'ShopSphere is a high-performance web storefront built to provide a clean shopping experience. It features an interactive shopping cart with live state calculations, multifaceted category and price filtering, responsive product grids, and instant search.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1200&q=80',
      techStack: ['React.js', 'Tailwind CSS', 'Context API', 'Lucide Icons'],
      features: [
        'Interactive real-time shopping cart with quantity adjustment',
        'Dynamic filter tags for category, rating, and price bounds',
        'Mobile-friendly responsive grid with smooth modal popups',
        'Optimized component rendering with memoized selectors'
      ],
      liveDemoUrl: '#',
      githubUrl: 'https://github.com/asim-shahzaman',
    },
    {
      id: 'devpulse',
      title: 'DevPulse — Developer Productivity Suite',
      shortDescription: 'An intuitive task & productivity management dashboard featuring drag-and-drop kanban boards, real-time analytics, and persistent storage.',
      fullDescription: 'DevPulse empowers software engineers and creators to track sprint tasks, log focus hours, and monitor velocity. Designed with a dark-mode first UI, it supports custom columns, tag filtering, local storage persistence, and performance summaries.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      techStack: ['React.js', 'JavaScript', 'Tailwind CSS', 'LocalStorage'],
      features: [
        'Kanban board with status management and task priorities',
        'Productivity metric cards displaying completed objectives',
        'Persistent state stored directly in browser localStorage',
        'Dark-mode dashboard layout with responsive drawer menus'
      ],
      liveDemoUrl: '#',
      githubUrl: 'https://github.com/asim-shahzaman',
    },
    {
      id: 'weatherwave',
      title: 'WeatherWave — Real-Time Forecast Portal',
      shortDescription: 'An interactive global weather intelligence app with live forecast charts, radar visualization, temperature conversion, and responsive climate cards.',
      fullDescription: 'WeatherWave delivers live weather conditions and multi-day meteorological forecasts. Users can search cities across the globe, view hourly precipitation probabilities, toggle between Celsius and Fahrenheit, and inspect air quality metrics.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=1200&q=80',
      techStack: ['React.js', 'JavaScript', 'Tailwind CSS', 'REST API'],
      features: [
        'Live city search with asynchronous weather data retrieval',
        'Interactive temperature and precipitation probability charts',
        'Comprehensive 5-day predictive weather cards with icons',
        'Adaptive styling that responds to day and night cycles'
      ],
      liveDemoUrl: '#',
      githubUrl: 'https://github.com/asim-shahzaman',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-900">
      <div className="flex flex-col items-center text-center mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-2">
          Featured Work
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Recent Projects
        </h2>
        <div className="w-12 h-1 bg-blue-500 rounded-full mt-4"></div>
        <p className="text-slate-400 mt-4 max-w-2xl text-sm sm:text-base">
          A showcase of responsive, component-driven web applications demonstrating clean code structure, modern UI design, and practical functionality.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group flex flex-col rounded-2xl bg-slate-900/60 border border-slate-800/80 overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue-500/10"
          >
            {/* Project Image */}
            <div className="relative aspect-video w-full overflow-hidden bg-slate-800">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-blue-600/90 text-white backdrop-blur-sm shadow-md">
                  Click to View Details
                </span>
              </div>
            </div>

            {/* Project Details */}
            <div className="flex flex-col flex-grow p-6">
              <h3 className="text-xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors mb-2 line-clamp-1">
                {project.title}
              </h3>
              
              <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-grow">
                {project.shortDescription}
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-800/70 text-slate-300 border border-slate-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Live Demo & GitHub */}
              <div className="flex items-center gap-3 pt-3 border-t border-slate-800/80">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/25 transition-all duration-200 active:scale-95"
                >
                  <Eye className="w-4 h-4" />
                  <span>Live Demo</span>
                </button>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-800/70 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60 transition-colors"
                  aria-label="View Source Code"
                  title="View Source on GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Live Demo / Case Study Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between p-5 border-b border-slate-800">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span>{selectedProject.title}</span>
              </h4>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 max-h-[75vh] overflow-y-auto space-y-4">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-800 border border-slate-700">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h5 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Project Overview
                </h5>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {selectedProject.fullDescription}
                </p>
              </div>

              <div>
                <h5 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Key Technical Features
                </h5>
                <ul className="space-y-1.5">
                  {selectedProject.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Technologies Utilized
                </h5>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-md text-xs font-medium bg-blue-950/60 text-blue-400 border border-blue-800/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 p-4 border-t border-slate-800 bg-slate-900/90">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Source Code</span>
              </a>
              <button
                onClick={() => setSelectedProject(null)}
                className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/30 transition-all duration-200"
              >
                <span>Close Preview</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

// ==========================================
// 6. CONTACT COMPONENT
// ==========================================

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const emailAddress = 'asim.shahzaman.dev@gmail.com';
  const linkedinUrl = 'https://linkedin.com/in/asim-shahzaman';
  const githubUrl = 'https://github.com/asim-shahzaman';

  const handleCopyEmail = () => {
    try {
      navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-900">
      <div className="flex flex-col items-center text-center mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-2">
          Get In Touch
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Let's Build Something Great Together
        </h2>
        <div className="w-12 h-1 bg-blue-500 rounded-full mt-4"></div>
        <p className="text-slate-400 mt-4 max-w-2xl text-sm sm:text-base">
          I am actively looking for a <span className="text-slate-200 font-semibold">Full-Time Web Developer role</span>. Whether you have an open position, a project proposal, or just want to say hi, feel free to reach out!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Info Card */}
        <div className="lg:col-span-5 bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm space-y-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              Contact Information
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Based in Azad Kashmir and ready to relocate or work remotely worldwide.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-800/40 border border-slate-800">
              <div className="p-2 rounded-lg bg-blue-600/20 text-blue-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-medium text-slate-400">Location</span>
                <p className="text-sm font-semibold text-slate-200">
                  Muzaffarabad, Azad Kashmir, Pakistan
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-800/40 border border-slate-800">
              <div className="p-2 rounded-lg bg-blue-600/20 text-blue-400">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-xs font-medium text-slate-400">Email Address</span>
                <p className="text-sm font-semibold text-slate-200 truncate">
                  {emailAddress}
                </p>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700/60 transition-colors"
                title="Copy email to clipboard"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Social Links & Mail */}
          <div className="pt-4 border-t border-slate-800/80 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
              Connect With Me
            </span>
            <div className="flex flex-wrap gap-3">
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium bg-slate-800/70 hover:bg-blue-600/20 text-slate-200 hover:text-blue-400 border border-slate-700/60 hover:border-blue-500/50 transition-all duration-200"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium bg-slate-800/70 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700/60 hover:border-slate-600 transition-all duration-200"
              >
                <Github className="w-4 h-4 text-slate-300" />
                <span>GitHub</span>
              </a>

              <a
                href={`mailto:${emailAddress}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/25 transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Form Card */}
        <div className="lg:col-span-7 bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
          <h3 className="text-xl font-bold text-white mb-2">
            Send a Direct Message
          </h3>
          <p className="text-sm text-slate-400 mb-6">
            Fill out the form below and I will get back to you within 24 hours.
          </p>

          {submitted ? (
            <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-800/50 text-center space-y-2">
              <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
              <h4 className="text-lg font-bold text-emerald-200">Message Received!</h4>
              <p className="text-sm text-slate-300">
                Thank you for reaching out. I'll respond to your email as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. sarah@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe the opportunity or project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 7. FOOTER COMPONENT
// ==========================================

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-8 px-4 sm:px-6 lg:px-8 text-center sm:text-left">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
            <Code2 className="w-4 h-4" />
          </div>
          <span className="font-semibold text-slate-200 text-sm">
            Asim Shahzaman <span className="text-slate-500 font-normal">| Web Developer</span>
          </span>
        </div>

        <p className="text-xs text-slate-500">
          Designed &amp; Developed with React.js &amp; Tailwind CSS
        </p>

        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800 text-xs transition-colors"
          title="Scroll to top"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}

// ==========================================
// 8. MAIN APP COMPONENT
// ==========================================

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-600 selection:text-white antialiased">
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar activeSection={activeSection} />
        <main className="flex-grow">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
