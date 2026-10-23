import React, { useState, useEffect } from 'react';

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
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased">
      <nav className="sticky top-0 z-50 bg-slate-950/90 border-b border-slate-800 p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span className="text-xl font-bold text-blue-400">Asim.dev</span>
          <div className="hidden md:flex gap-4 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
          <a href="#contact" className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-bold hover:bg-blue-500">Hire Me</a>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-20 text-center">
        <div className="mb-6 flex justify-center gap-2">
          <span className="px-3 py-1 bg-blue-900/50 text-blue-400 rounded-full text-xs border border-blue-800">Available for Full-Time Roles</span>
          <span className="px-3 py-1 bg-slate-900 text-slate-400 rounded-full text-xs border border-slate-800">Muzaffarabad, Pakistan</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
          Hi, I'm <span className="text-blue-400">Asim Shahzaman</span>
        </h1>
        <h2 className="text-2xl text-slate-300 font-semibold mb-6">Building Modern & User-Friendly Websites</h2>
        <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-lg">
          I'm a passionate Front-End Web Developer crafting responsive web applications with React.js and modern UI architecture.
        </p>

        <div className="flex justify-center gap-4 mb-20">
          <a href="#projects" className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition">View My Work</a>
          <a href="#contact" className="px-8 py-3 bg-slate-900 border border-slate-800 hover:bg-slate-800 text-white rounded-xl font-bold transition">Contact Me</a>
        </div>

        <section id="about" className="py-20 border-t border-slate-800">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg">I specialize in turning UI/UX wireframes into responsive, accessible web applications using React.js, Tailwind CSS, and modern JavaScript.</p>
        </section>

        <section id="skills" className="py-20 border-t border-slate-800">
          <h2 className="text-3xl font-bold mb-4">Technical Toolkit</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS', 'Git'].map((skill) => (
              <span key={skill} className="px-6 py-3 bg-slate-900 border border-slate-800 rounded-xl text-lg font-semibold hover:border-blue-500 transition">{skill}</span>
            ))}
          </div>
        </section>

        <section id="contact" className="py-20 border-t border-slate-800">
          <h2 className="text-3xl font-bold mb-4">Let's Build Something Great</h2>
          <p className="text-slate-400 mb-8">I am actively looking for a Full-Time Web Developer role.</p>
          <a href="mailto:asim.shahzaman.dev@gmail.com" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-lg transition">Send Email</a>
        </section>
      </main>
    </div>
  );
}