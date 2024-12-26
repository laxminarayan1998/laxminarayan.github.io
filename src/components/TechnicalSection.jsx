import React, { useState } from "react";
import { Code, Database, Cloud, GitBranch, Wrench } from "lucide-react";

const TechnicalSection = () => {
  const [activeCategory, setActiveCategory] = useState("languages");

  const categories = {
    languages: {
      icon: Code,
      title: "Programming Languages",
      skills: [
        {
          name: "Dart",
          level: 95,
          description: "Primary language for Flutter development",
        },
        {
          name: "Core Java",
          level: 85,
          description: "Native Android development",
        },
        {
          name: "JavaScript",
          level: 75,
          description: "Web and Node.js development",
        },
      ],
    },
    frameworks: {
      icon: Wrench,
      title: "Frameworks & Tools",
      skills: [
        {
          name: "Flutter",
          level: 95,
          description: "Cross-platform app development",
        },
        { name: "React.js", level: 70, description: "Web development (Basic)" },
        { name: "Node.js", level: 75, description: "Backend development" },
      ],
    },
    databases: {
      icon: Database,
      title: "Databases & State Management",
      skills: [
        {
          name: "Firebase",
          level: 90,
          description: "Real-time database & authentication",
        },
        { name: "MongoDB", level: 80, description: "NoSQL database" },
        {
          name: "BLoC/Provider",
          level: 85,
          description: "Flutter state management",
        },
      ],
    },
    cloud: {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: [
        {
          name: "AWS",
          level: 75,
          description: "Cloud infrastructure & services",
        },
        { name: "Azure", level: 70, description: "Microsoft cloud platform" },
        {
          name: "CI/CD",
          level: 80,
          description: "Automated deployment pipelines",
        },
      ],
    },
    version: {
      icon: GitBranch,
      title: "Version Control & Others",
      skills: [
        {
          name: "Git & GitHub",
          level: 90,
          description: "Version control & collaboration",
        },
        {
          name: "Method Channels",
          level: 85,
          description: "Native platform integration",
        },
        {
          name: "UI/UX Design",
          level: 75,
          description: "Adobe XD, Sketch, Photoshop",
        },
      ],
    },
  };

  return (
    <section
      id="skills"
      className="min-h-screen relative overflow-hidden bg-[#0a0f0d]"
    >
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#4ade80]/5 via-transparent to-transparent" />
      </div>

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(#4ade80 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Content */}
      <div className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Technical Expertise
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and proficiency levels
            </p>
          </div>

          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-1 mb-12">
            {Object.entries(categories).map(([key, category]) => {
              const Icon = category.icon;
              const isActive = activeCategory === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`
                    flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm transition-all duration-300
                    ${
                      isActive
                        ? "bg-[#4ade80] text-[#0a0f0d] shadow-lg shadow-[#4ade80]/25"
                        : "bg-[#4ade80]/10 text-gray-400 hover:bg-[#4ade80]/20 hover:text-white"
                    }
                    border border-[#4ade80]/20 hover:border-[#4ade80]/50
                  `}
                >
                  <Icon
                    className={`w-4 h-4 ${isActive ? "animate-pulse" : ""}`}
                  />
                  <span className="font-medium">{category.title}</span>
                </button>
              );
            })}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories[activeCategory].skills.map((skill, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-[#4ade80]/5 border border-[#4ade80]/20 hover:border-[#4ade80]/50 transition-all duration-300"
              >
                <div className="p-6">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#4ade80] transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-gray-400 text-sm mt-2">
                      {skill.description}
                    </p>
                  </div>

                  <div className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-400">Proficiency</span>
                      <span className="text-lg font-bold text-[#4ade80]">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-[#4ade80]/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#4ade80] transform origin-left transition-all duration-1000 ease-out group-hover:scale-x-105"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-[#4ade80]/10 to-transparent" />
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-[#4ade80]/10 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSection;