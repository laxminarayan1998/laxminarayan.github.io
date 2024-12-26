import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Instagram,
  Facebook,
  ChevronRight,
  Download,
  Code,
  Briefcase,
  User,
  Mail,
} from "lucide-react";

const ModernPortfolio = () => {
  const [activeSection, setActiveSection] = useState("home");

  const projects = [
    {
      title: "Fanzly",
      description: "Social platform with exclusive content and live streaming",
      tags: ["Flutter", "Firebase", "WebRTC"],
    },
    {
      title: "Instrucko",
      description: "Educational platform connecting global tutors",
      tags: ["Flutter", "Video Calls", "Payment Integration"],
    },
    {
      title: "Vief",
      description: "Healthcare scheduling with real-time chat",
      tags: ["MQTT", "Local DB", "Flutter"],
    },
    {
      title: "My Manager",
      description: "Hotel management and analytics platform",
      tags: ["Flutter Web", "Firebase", "Analytics"],
    },
  ];

  const skills = [
    { name: "Flutter", level: 90 },
    { name: "Dart", level: 85 },
    { name: "Firebase", level: 80 },
    { name: "Java", level: 75 },
    { name: "Android", level: 70 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Navbar */}
      <nav className="fixed w-full bg-black/30 backdrop-blur-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              nryn
            </span>
            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "projects", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => setActiveSection(item)}
                    className={`text-sm uppercase tracking-wider ${
                      activeSection === item
                        ? "text-green-400"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Laxminarayan
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8">
              Flutter Developer crafting beautiful mobile experiences
            </p>
            <div className="flex justify-center gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full hover:opacity-90 transition-opacity flex items-center">
                <Download className="w-5 h-5 mr-2" />
                Resume
              </button>
              <button className="px-6 py-3 bg-white/10 rounded-full hover:bg-white/20 transition-all flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                Contact
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="group">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">{skill.name}</span>
                  <span className="text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 p-6 hover:shadow-xl transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <a
            href="mailto:laxminarayan1998@icloud.com"
            className="text-xl text-green-400 hover:text-green-300 transition-colors mb-8 inline-block"
          >
            laxminarayan1998@icloud.com
          </a>
          <div className="flex justify-center gap-6">
            {[
              { icon: Github, link: "https://github.com/laxminarayan1998" },
              {
                icon: Linkedin,
                link: "https://www.linkedin.com/in/laxminarayan1998",
              },
              {
                icon: Instagram,
                link: "https://www.instagram.com/laxminarayan_1998",
              },
              {
                icon: Facebook,
                link: "https://www.facebook.com/laxminarayan1998",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-gray-500">
        <p>© 2024 Laxminarayan. Built with passion.</p>
      </footer>
    </div>
  );
};

export default ModernPortfolio;
