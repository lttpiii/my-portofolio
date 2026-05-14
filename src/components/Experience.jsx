import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Award,
  Calendar,
  MapPin,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const Experience = () => {
  const experiences = [
    {
      type: "work",
      icon: Briefcase,
      title: "Internship - Automation Tools Developer",
      organization: "PT Softion Gerbang Teknologi Kreatif",
      period: "6+ Months",
      description:
        "Developed automation tools to streamline internal processes. Gained hands-on experience in professional software development workflows and tool creation.",
      color: "from-primary to-secondary",
    },
    {
      type: "education",
      icon: GraduationCap,
      title: "SMKN 5 Kota Bekasi",
      organization: "Software Engineering (RPL) - Best Graduate",
      period: "2023 - 2026",
      description:
        "Graduated as the best student in Software Engineering department. Achieved perfect UKOM score (100/100). Class of 2026, Generation 26.",
      color: "from-green-500 to-emerald-500",
    },
    {
      type: "education",
      icon: GraduationCap,
      title: "SMPN 25 Kota Bekasi",
      organization: "Junior High School",
      period: "2020 - 2023",
      description: "Completed junior high school education in Bekasi.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      type: "education",
      icon: GraduationCap,
      title: "SD Marga Mulia 2 Bekasi",
      organization: "Elementary School",
      period: "2014 - 2020",
      description: "Completed elementary education in Bekasi.",
      color: "from-orange-500 to-yellow-500",
    },
  ];

  const leadership = [
    {
      role: "Chairman",
      organization: "SEL (Software Engineering League)",
      period: "School Event",
      description:
        "Led the Software Engineering League event as Chairman, demonstrating strong leadership and organizational skills.",
    },
    {
      role: "Secretary",
      organization: "AOC (Algorithm of Creative)",
      period: "School Organization",
      description:
        "Served as Secretary for AOC (Algorithm of Creative), managing documentation and organizational communications.",
    },
  ];

  return (
    <section className="py-20 relative bg-gray-50/50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Experience & <span className="text-gradient">Education</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto mb-20">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

            {experiences.map((exp, index) => (
              <ScrollReveal key={exp.title} delay={index * 0.15}>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="relative flex gap-6 mb-8 last:mb-0"
                >
                  <div
                    className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg z-10`}
                  >
                    <exp.icon className="w-7 h-7 text-white" />
                  </div>

                  <div className="flex-1 p-6 rounded-2xl glass hover:shadow-lg transition-all">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-lg font-bold dark:text-white">
                        {exp.title}
                      </h3>
                      <span
                        className={`px-2 py-0.5 rounded text-xs font-medium ${
                          exp.type === "work"
                            ? "bg-primary/10 text-primary"
                            : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                        }`}
                      >
                        {exp.type === "work" ? "Work" : "Education"}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.organization}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold dark:text-white">
              Leadership Experience
            </h3>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {leadership.map((role, index) => (
            <ScrollReveal key={role.role} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-2xl glass hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Award className="w-6 h-6 text-primary" />
                  <h4 className="text-lg font-bold dark:text-white">
                    {role.role}
                  </h4>
                </div>
                <p className="text-primary font-medium text-sm mb-2">
                  {role.organization}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                  {role.period}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {role.description}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
