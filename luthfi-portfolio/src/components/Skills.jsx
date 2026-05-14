import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Layout,
  Database,
  GitBranch,
  Terminal,
  Cpu,
  Globe,
  Layers,
  Box,
  Workflow,
  Zap,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: Server,
      skills: ["Golang", "Node.js", "Express.js", "RESTful APIs", "C++"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Frontend Development",
      icon: Layout,
      skills: [
        "React",
        "Tailwind CSS",
        "HTML/CSS",
        "JavaScript",
        "Responsive Design",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Database & Tools",
      icon: Database,
      skills: ["Database Design", "Git & GitHub", "VS Code", "Postman"],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Architecture & Methods",
      icon: Workflow,
      skills: [
        "MVC Architecture",
        "Clean Code",
        "API Design",
        "System Design Basics",
      ],
      color: "from-orange-500 to-red-500",
    },
  ];

  const additionalSkills = [
    { icon: Code2, label: "Problem Solving" },
    { icon: Globe, label: "Web Development" },
    { icon: GitBranch, label: "Version Control" },
    { icon: Terminal, label: "CLI Tools" },
    { icon: Layers, label: "Full Stack" },
    { icon: Cpu, label: "System Logic" },
    { icon: Box, label: "Package Management" },
    { icon: Zap, label: "Performance" },
  ];

  return (
    <section
      id="skills"
      className="py-20 relative bg-gray-50/50 dark:bg-gray-800/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              My <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A versatile developer with expertise in backend systems and strong
              frontend capabilities
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <ScrollReveal key={category.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl glass hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}
                >
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 dark:text-white">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary dark:bg-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold dark:text-white">
              Additional Expertise
            </h3>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {additionalSkills.map((skill, index) => (
            <ScrollReveal key={skill.label} delay={index * 0.05}>
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="p-4 rounded-xl glass text-center group cursor-default"
              >
                <skill.icon className="w-8 h-8 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {skill.label}
                </span>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
