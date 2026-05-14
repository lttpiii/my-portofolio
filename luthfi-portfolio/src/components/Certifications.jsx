import { motion } from "framer-motion";
import { Award, Medal, Trophy, FileCheck } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const Certifications = () => {
  const certifications = [
    {
      icon: Trophy,
      title: "Best Graduate Award",
      issuer: "SMKN 5 Kota Bekasi",
      description:
        "Recognized as the best graduate in Software Engineering (RPL) department for the Class of 2026.",
      color: "from-yellow-500 to-orange-500",
      badge: "Top Honor",
    },
    {
      icon: Award,
      title: "Chairman Organization Certificate",
      issuer: "SEL (Software Engineering League)",
      description:
        "Certificate of appreciation for serving as Chairman of SEL event, demonstrating exceptional leadership abilities.",
      color: "from-primary to-secondary",
      badge: "Leadership",
    },
    {
      icon: FileCheck,
      title: "Competency Certificate",
      issuer: "RPL Department - SMKN 5 Kota Bekasi",
      description:
        "Professional competency certification in Web Development for Tool Lending Application project.",
      color: "from-green-500 to-emerald-500",
      badge: "Technical",
    },
    {
      icon: Medal,
      title: "Design Competition - 2nd Place",
      issuer: "School Competition",
      description:
        "Achieved 2nd place in school-level design competition, showcasing creative and visual design skills.",
      color: "from-purple-500 to-pink-500",
      badge: "Creative",
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-gradient">Certifications</span> & Awards
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Recognitions and achievements that validate my skills and
              dedication
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <ScrollReveal key={cert.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative p-6 rounded-2xl glass hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cert.color} opacity-5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500`}
                />

                <div className="relative flex items-start gap-4">
                  <div
                    className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center shadow-lg`}
                  >
                    <cert.icon className="w-7 h-7 text-white" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold dark:text-white">
                        {cert.title}
                      </h3>
                      <span
                        className={`px-2 py-0.5 rounded text-xs font-bold bg-gradient-to-r ${cert.color} text-white`}
                      >
                        {cert.badge}
                      </span>
                    </div>

                    <p className="text-primary text-sm font-medium mb-2">
                      {cert.issuer}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
