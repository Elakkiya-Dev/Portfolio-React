import './App.css';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function App() {
  return (
    <div className="font-sans text-gray-900 bg-gradient-to-br from-white to-blue-50 min-h-screen">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold text-indigo-700">Elakkiya</h1>
        <nav className="space-x-6 text-sm font-medium text-gray-700">
          <a href="#about" className="hover:text-indigo-600 transition">About</a>
          <a href="#skills" className="hover:text-indigo-600 transition">Skills</a>
          <a href="#projects" className="hover:text-indigo-600 transition">Projects</a>
          <a href="#experience" className="hover:text-indigo-600 transition">Experience</a>
          <a href="#contact" className="hover:text-indigo-600 transition">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-700 via-purple-700 to-pink-600 text-white text-center px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-xl">Hi, I'm Elakkiya</h1>
        <p className="text-2xl md:text-3xl font-light mb-8">Frontend Developer | Angular | React </p>
        <a
          href="#skills"
          className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold text-lg shadow-2xl hover:bg-blue-100 transition duration-300"
        >
          🚀 View My Skills
        </a>
      </section>

      {/* About Me */}
      <section id="about" className="py-24 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold mb-4 text-indigo-700">About Me</h2>
        <div className="max-w-4xl mx-auto text-lg leading-relaxed text-gray-700">
          <p>
            I'm a passionate frontend developer with 2.5 years of experience crafting intuitive and dynamic web applications. I excel in Angular and React development, API integration, and building scalable, maintainable codebases. I love transforming designs into functional, high-performing web apps.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 px-6 bg-gradient-to-b from-blue-100 to-white text-center">
        <h2 className="text-4xl font-bold mb-8 text-purple-700">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto text-lg">
          {["HTML", "CSS", "Bootstrap", "Tailwind CSS", "JavaScript", "TypeScript", "Angular", "React", "Git & GitHub"].map((skill, i) => (
            <div
              key={i}
              className="bg-white shadow-xl p-6 rounded-2xl transform hover:scale-105 transition-transform border-t-4 border-indigo-400"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold mb-10 text-blue-700">Projects</h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div className="rounded-2xl bg-gradient-to-r from-cyan-100 to-blue-100 p-6 shadow-2xl text-left hover:scale-105 transition-transform border-l-8 border-cyan-400">
            <h3 className="text-2xl font-semibold mb-2">Job Tracker Pro</h3>
            <p className="mb-2">A full-stack job application tracker with CRUD, filters, and analytics dashboard.</p>
            <p className="text-sm text-gray-700">React, Tailwind CSS, Node.js</p>
          </div>
          <div className="rounded-2xl bg-gradient-to-r from-pink-100 to-purple-100 p-6 shadow-2xl text-left hover:scale-105 transition-transform border-l-8 border-pink-400">
            <h3 className="text-2xl font-semibold mb-2">Insurance Product Integrator</h3>
            <p className="mb-2">Built a unified Angular frontend integrating various insurance provider APIs.</p>
            <p className="text-sm text-gray-700">Angular, Bootstrap, REST APIs</p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24 px-6 bg-gradient-to-br from-white to-blue-50 text-center">
        <h2 className="text-4xl font-bold mb-8 text-indigo-800">Experience</h2>
        <div className="max-w-3xl mx-auto text-left bg-white shadow-2xl p-6 rounded-2xl border-l-8 border-indigo-400">
          <h4 className="text-xl font-semibold">Frontend Developer</h4>
          <p className="text-gray-700">Web Integration Team | 2.5 Years</p>
          <ul className="list-disc ml-6 mt-2 text-gray-600">
            <li>Integrated multiple insurance products into a single web portal.</li>
            <li>Worked on Angular components, services, and routing architecture.</li>
            <li>Collaborated with backend and design teams for seamless delivery.</li>
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold mb-6 text-blue-800">Contact</h2>
        <p className="text-lg mb-6 text-gray-700">Let's connect! Feel free to reach out 👇</p>
        <div className="flex justify-center space-x-8 text-3xl">
          <a href="mailto:your.email@example.com" className="text-blue-600 hover:text-blue-800">
            <FaEnvelope />
          </a>
          <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer" className="text-gray-800 hover:text-black">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-900">
            <FaLinkedin />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-gray-600 bg-gradient-to-r from-blue-100 via-white to-purple-100 border-t">
        © 2025 Elakkiya. Built with 💙 using React & Tailwind CSS.
      </footer>
    </div>
  );
}

export default App;
