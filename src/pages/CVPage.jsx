import { motion } from "framer-motion";
import {
  Download,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Briefcase,
  Award,
  Star,
  Code2,
  User,
  Calendar,
  School,
  Trophy,
  FileCheck,
  Medal,
} from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";

const CVPage = () => {
  return (
    <div className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <Link
              to="/"
              className="px-4 py-2 rounded-lg text-primary hover:bg-primary/10 transition-colors font-medium"
            >
              ← Back to Portfolio
            </Link>

            <motion.a
              href="\CV Resume Luthfi Indrawan As Backend Developer & Software Engineer.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all"
            >
              <Download className="w-5 h-5" />
              Download CV (PDF)
            </motion.a>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="relative bg-gradient-to-br from-primary via-secondary to-accent p-8 sm:p-12 text-white overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full" />
                <div className="absolute bottom-10 right-10 w-48 h-48 border-4 border-white rounded-full" />
                <div className="absolute top-1/2 left-1/2 w-24 h-24 border-4 border-white rounded-full -translate-x-1/2 -translate-y-1/2" />
              </div>

              <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  className="w-28 h-28 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-4xl font-bold border-4 border-white/30"
                >
                  LI
                </motion.div>

                <div className="text-center sm:text-left flex-1">
                  <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                    Luthfi Indrawan
                  </h1>
                  <p className="text-lg text-white/90 mb-4">
                    Software Engineer | Backend Specialist
                  </p>

                  <div className="flex flex-wrap justify-center sm:justify-start gap-3 text-sm">
                    <a
                      href="mailto:luthfiindrawan78@gmail.com"
                      className="flex items-center gap-1 hover:text-white/80 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      luthfiindrawan78@gmail.com
                    </a>
                    <a
                      href="tel:081318281410"
                      className="flex items-center gap-1 hover:text-white/80 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      0813-1828-1410
                    </a>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      Bekasi Utara, Jawa Barat, Indonesia
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative z-10 flex justify-center sm:justify-end gap-3 mt-6">
                {[
                  {
                    icon: FaLinkedin,
                    href: "https://www.linkedin.com/in/luthfi-indrawan-42bbb9340",
                  },
                  { icon: FaGithub, href: "https://github.com/lttpiii" },
                  {
                    icon: FaInstagram,
                    href: "https://www.instagram.com/lttpiii",
                  },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="p-8 sm:p-12 space-y-8">
              {/* Profile Summary */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold dark:text-white">
                    Profile Summary
                  </h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed pl-13">
                  An 18-year-old passionate Software Engineer specializing in
                  Backend Development with strong Frontend capabilities. Recent
                  graduate (Class of 2026) from SMKN 5 Kota Bekasi as the{" "}
                  <span className="font-semibold text-primary">
                    Best Graduate in Software Engineering (RPL)
                  </span>
                  . Achieved a{" "}
                  <span className="font-semibold text-primary">
                    perfect UKOM score of 100
                  </span>{" "}
                  with "Very Competent" distinction. Experienced in Golang,
                  Node.js, React, and system architecture. Proven leadership
                  experience as event chairman and organizational secretary. A
                  keen observer who learns from the smallest details and adapts
                  quickly to new technologies.
                </p>
              </section>

              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" />

              {/* Education */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <h2 className="text-xl font-bold dark:text-white">
                    Education
                  </h2>
                </div>

                <div className="space-y-4 pl-13">
                  <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border-l-4 border-primary">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <h3 className="font-bold text-gray-900 dark:text-white">
                        SMKN 5 Kota Bekasi
                      </h3>
                      <span className="px-2 py-1 rounded bg-primary/10 text-primary text-xs font-semibold">
                        2023 - 2026
                      </span>
                    </div>
                    <p className="text-primary font-medium text-sm mb-1">
                      Software Engineering (RPL) - Best Graduate
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Graduated as the best student in RPL department. Perfect
                      UKOM score (100/100). Class of 2026, Generation 26.
                      Developed tool lending application as final project.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border-l-4 border-blue-400">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <h3 className="font-bold text-gray-900 dark:text-white">
                        SMPN 25 Kota Bekasi
                      </h3>
                      <span className="px-2 py-1 rounded bg-blue-100 text-blue-700 text-xs font-semibold">
                        2020 - 2023
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Junior High School
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border-l-4 border-yellow-400">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <h3 className="font-bold text-gray-900 dark:text-white">
                        SD Marga Mulia 2 Bekasi
                      </h3>
                      <span className="px-2 py-1 rounded bg-yellow-100 text-yellow-700 text-xs font-semibold">
                        2014 - 2020
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Elementary School
                    </p>
                  </div>
                </div>
              </section>

              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" />

              {/* Experience */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h2 className="text-xl font-bold dark:text-white">
                    Experience
                  </h2>
                </div>

                <div className="pl-13">
                  <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border-l-4 border-secondary">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <h3 className="font-bold text-gray-900 dark:text-white">
                        Internship - Automation Tools Developer
                      </h3>
                      <span className="px-2 py-1 rounded bg-secondary/10 text-secondary text-xs font-semibold">
                        6+ Months
                      </span>
                    </div>
                    <p className="text-secondary font-medium text-sm mb-2">
                      PT Softion Gerbang Teknologi Kreatif
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Developed automation tools to streamline internal
                      processes and improve operational efficiency. Gained
                      professional experience in software development workflows
                      and tool creation.
                    </p>
                  </div>
                </div>
              </section>

              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" />

              {/* Skills */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <Code2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h2 className="text-xl font-bold dark:text-white">
                    Technical Skills
                  </h2>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 pl-13">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      Backend
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Golang",
                        "Node.js",
                        "Express.js",
                        "REST API",
                        "C++",
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-secondary" />
                      Frontend
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {["React", "Tailwind CSS", "HTML/CSS", "JavaScript"].map(
                        (skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm"
                          >
                            {skill}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500" />
                      Database & Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Database Design",
                        "Git/GitHub",
                        "VS Code",
                        "Postman",
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-orange-500" />
                      Architecture
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {["MVC", "Clean Code", "API Design", "System Design"].map(
                        (skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm"
                          >
                            {skill}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </section>

              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" />

              {/* Projects */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center">
                    <Star className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <h2 className="text-xl font-bold dark:text-white">
                    Key Projects
                  </h2>
                </div>

                <div className="space-y-4 pl-13">
                  <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-gray-900 dark:text-white">
                        SIPRESI
                      </h3>
                      <span className="px-2 py-1 rounded bg-green-100 text-green-700 text-xs font-semibold">
                        In Production
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Student violation and achievement points recording system
                      for SMKN 5 Kota Bekasi. Full-stack application with
                      real-time tracking.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-gray-900 dark:text-white">
                        Tool Lending Application
                      </h3>
                      <span className="px-2 py-1 rounded bg-blue-100 text-blue-700 text-xs font-semibold">
                        UKOM Project
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Complete tool lending management system. UKOM final
                      project with perfect score (100/100).
                    </p>
                  </div>
                </div>
              </section>

              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" />

              {/* Certifications */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <h2 className="text-xl font-bold dark:text-white">
                    Certifications & Awards
                  </h2>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 pl-13">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50">
                    <Medal className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm dark:text-white">
                        Best Graduate RPL
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        SMKN 5 Kota Bekasi
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50">
                    <Award className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm dark:text-white">
                        Chairman SEL Certificate
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Software Engineering League
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50">
                    <FileCheck className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm dark:text-white">
                        Competency Certificate
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Web Development - RPL Dept
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50">
                    <School className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm dark:text-white">
                        Design Competition 2nd Place
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        School Level Competition
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" />

              {/* Leadership */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                    <Award className="w-5 h-5 text-red-600 dark:text-red-400" />
                  </div>
                  <h2 className="text-xl font-bold dark:text-white">
                    Leadership & Organizations
                  </h2>
                </div>

                <div className="space-y-3 pl-13">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">SEL</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">
                        Chairman
                      </h4>
                      <p className="text-sm text-primary">
                        Software Engineering League (SEL)
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        Led school-wide tech event as main coordinator
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-secondary font-bold">AOC</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">
                        Secretary
                      </h4>
                      <p className="text-sm text-secondary">
                        Algorithm of Creative (AOC)
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        Managed documentation and communications
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" />

              {/* Personal Info */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                  </div>
                  <h2 className="text-xl font-bold dark:text-white">
                    Personal Information
                  </h2>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 pl-13">
                  <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50">
                    <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                      Full Name
                    </p>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Luthfi Indrawan
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50">
                    <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                      Date of Birth
                    </p>
                    <p className="font-medium text-gray-900 dark:text-white">
                      October 11, 2007 (18 years old)
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50">
                    <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                      Birth Order
                    </p>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Second of two siblings
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50">
                    <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                      Generation
                    </p>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Generation 26 / Batch 16
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 sm:col-span-2">
                    <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                      Unique Trait
                    </p>
                    <p className="font-medium text-gray-900 dark:text-white italic">
                      "I love observing people and learning from the smallest
                      details"
                    </p>
                  </div>
                </div>
              </section>

              {/* Footer Note */}
              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 border border-primary/20 text-center">
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  References available upon request. Looking for opportunities
                  in Software Engineering / Backend Development.
                </p>
                <div className="flex items-center justify-center gap-2 mt-3 text-primary font-semibold">
                  <Mail className="w-4 h-4" />
                  luthfiindrawan78@gmail.com
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-8 text-center">
            <motion.a
              href="/cv.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg hover:shadow-2xl hover:shadow-primary/25 transition-all"
            >
              <Download className="w-6 h-6" />
              Download CV as PDF
            </motion.a>
            <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
              File: cv.pdf (place your PDF in the public folder)
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default CVPage;
