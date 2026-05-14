import { motion } from "framer-motion";
import { User, Code2, Palette, Award, Users, Eye } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const About = () => {
  const stats = [
    { icon: Code2, label: "Programming Languages", value: "5+" },
    { icon: Award, label: "Certifications", value: "3" },
    { icon: Users, label: "Leadership Roles", value: "2+" },
    { icon: Palette, label: "Design Awards", value: "1" },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="w-full aspect-square max-w-md mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 p-1">
                <div className="w-full h-full rounded-2xl bg-white dark:bg-gray-800 flex items-center justify-center">
                  <img
                    src="/luthfi.jpeg"
                    alt="Luthfi"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-24 h-24 border-4 border-dashed border-primary/30 rounded-full"
              />
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            <ScrollReveal direction="right" delay={0.1}>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm{" "}
                <span className="font-semibold text-primary">
                  Luthfi Indrawan
                </span>
                , an 18-year-old Software Engineer from Bekasi, Indonesia. Born
                on October 11, 2007, I'm the second of two siblings and recently
                graduated from{" "}
                <span className="font-semibold">SMKN 5 Kota Bekasi</span> (Class
                of 2026) with honors as the
                <span className="font-semibold text-primary">
                  {" "}
                  Best Graduate in Software Engineering (RPL)
                </span>
                .
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I achieved a{" "}
                <span className="font-semibold text-primary">
                  perfect score of 100
                </span>{" "}
                in my UKOM (Uji Kompetensi) with "Very Competent" distinction.
                My final project was a
                <span className="font-semibold"> tool lending application</span>{" "}
                that became my UKOM case study.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.3}>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 dark:bg-primary/10 border border-primary/20">
                <Eye className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-gray-600 dark:text-gray-300 italic">
                  "I love observing people and learning from the smallest
                  details. This curiosity drives my continuous growth as a
                  developer and leader."
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.4}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-4 rounded-xl glass"
                  >
                    <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
