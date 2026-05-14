import { motion } from "framer-motion";
import { Star, Calendar, Users } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const Projects = () => {
  const projects = [
    {
      title: "SIPRESI",
      description:
        "A comprehensive student violation and achievement points recording system. Built for SMKN 5 Kota Bekasi and scheduled for deployment next week. Features real-time tracking and automated reporting.",
      tags: ["React", "Node.js", "Database", "Full Stack"],
      highlights: ["School Project", "Production Ready", "Team Lead"],
      icon: Users,
      color: "from-primary to-secondary",
      status: "In Production",
    },
    {
      title: "Tool Lending Application",
      description:
        'My UKOM (Uji Kompetensi) final project - a complete tool lending management system. This project helped me achieve a perfect score of 100 with "Very Competent" distinction.',
      tags: ["Full Stack", "Database Design", "REST API"],
      highlights: ["UKOM Project", "Score: 100/100", "Very Competent"],
      icon: Star,
      color: "from-green-500 to-emerald-500",
      status: "Completed",
    },
    {
      title: "Automation Tools",
      description:
        "Developed during 6-month internship at PT Softion Gerbang Teknologi Kreatif. Built automation tools to streamline internal processes and improve operational efficiency.",
      tags: ["Automation", "Backend", "Tools"],
      highlights: ["Internship", "6 Months", "PT Softion"],
      icon: Calendar,
      color: "from-orange-500 to-red-500",
      status: "Confidential",
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Real-world projects that showcase my technical abilities and
              problem-solving skills
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -10 }}
                className="group relative p-6 rounded-2xl glass hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.color}`}
                />

                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center`}
                  >
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === "In Production"
                        ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                        : project.status === "Completed"
                          ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                          : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-2 dark:text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-md text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="space-y-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                  {project.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400"
                    >
                      <Star className="w-4 h-4 text-primary" />
                      {highlight}
                    </div>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
