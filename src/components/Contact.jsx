// Contact.jsx
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Briefcase,
  Clock3,
  MessageCircle,
} from "lucide-react";

import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

import ScrollReveal from "./ScrollReveal";

const Contact = () => {
  // =========================
  // Contact Information
  // =========================
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "luthfiindrawan78@gmail.com",
      href: "mailto:luthfiindrawan78@gmail.com",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "0813-1828-1410",
      href: "tel:081318281410",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bekasi Utara, Jawa Barat, Indonesia",
      href: "#",
      color: "from-blue-500 to-cyan-500",
    },
  ];

  // =========================
  // Socials
  // =========================
  const socials = [
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/luthfi-indrawan-42bbb9340",
      color: "bg-blue-600",
    },
    {
      icon: FaGithub,
      label: "GitHub",
      href: "https://github.com/lttpiii",
      color: "bg-gray-800 dark:bg-gray-700",
    },
    {
      icon: FaInstagram,
      label: "Instagram",
      href: "https://www.instagram.com/lttpiii",
      color: "bg-gradient-to-br from-purple-500 to-pink-500",
    },
  ];

  // =========================
  // CTA Actions
  // =========================
  const actions = [
    {
      title: "Email Me",
      description: "Best for professional discussions and opportunities.",
      href: "mailto:luthfiindrawan78@gmail.com",
      icon: Mail,
      color: "from-red-500/10 to-pink-500/10 border-red-500/20",
      iconBg: "from-red-500 to-pink-500",
    },
    {
      title: "Chat on WhatsApp",
      description: "Quick response for collaborations or casual discussions.",
      href: "https://wa.me/6281318281410",
      icon: FaWhatsapp,
      color: "from-green-500/10 to-emerald-500/10 border-green-500/20",
      iconBg: "from-green-500 to-emerald-500",
    },
    {
      title: "Connect on LinkedIn",
      description: "Let’s connect professionally and grow together.",
      href: "https://www.linkedin.com/in/luthfi-indrawan-42bbb9340",
      icon: FaLinkedin,
      color: "from-blue-500/10 to-cyan-500/10 border-blue-500/20",
      iconBg: "from-blue-500 to-cyan-500",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 relative bg-gray-50/50 dark:bg-gray-800/50 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Let's <span className="text-gradient">Work Together</span>
            </h2>

            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Open for internships, collaborations, freelance projects, and
              exciting opportunities in web development.
            </p>

            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4" />
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* LEFT SIDE */}
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold dark:text-white mb-3">
                  Contact Information
                </h3>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Feel free to reach out if you have any questions, project
                  ideas, or opportunities. I'm always open to discussing new
                  ideas and building meaningful projects.
                </p>
              </div>

              {/* Contact Cards */}
              {contactInfo.map((info) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 rounded-2xl glass hover:shadow-lg transition-all group"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0`}
                  >
                    <info.icon className="w-6 h-6 text-white" />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {info.label}
                    </p>

                    <p className="font-medium text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}

              {/* Availability */}
              <div className="p-5 rounded-2xl glass">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-white" />
                  </div>

                  <div>
                    <h4 className="font-semibold dark:text-white">
                      Currently Available
                    </h4>

                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Open for opportunities
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {[
                    "Frontend Development",
                    "Backend Development",
                    "Freelance",
                    "Internship",
                  ].map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary border border-primary/20"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 mt-4 text-sm text-gray-500 dark:text-gray-400">
                  <Clock3 className="w-4 h-4" />
                  Usually responds within a few hours
                </div>
              </div>

              {/* Socials */}
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  Follow me on social media
                </p>

                <div className="flex gap-3">
                  {socials.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                      }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-12 h-12 rounded-xl ${social.color} flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow`}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* RIGHT SIDE */}
          <ScrollReveal direction="right">
            <div className="space-y-5">
              {actions.map((action, index) => (
                <motion.a
                  key={action.title}
                  href={action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className={`group relative overflow-hidden p-6 rounded-3xl border bg-gradient-to-br ${action.color} backdrop-blur-xl hover:shadow-2xl transition-all duration-300 block`}
                >
                  {/* Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/5 to-transparent" />

                  <div className="relative z-10 flex items-start justify-between gap-4">
                    <div className="flex gap-4">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${action.iconBg} flex items-center justify-center shadow-lg flex-shrink-0`}
                      >
                        <action.icon className="w-6 h-6 text-white" />
                      </div>

                      <div>
                        <h3 className="text-xl font-bold dark:text-white mb-2 group-hover:text-primary transition-colors">
                          {action.title}
                        </h3>

                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          {action.description}
                        </p>
                      </div>
                    </div>

                    <motion.div
                      whileHover={{
                        x: 3,
                        y: -3,
                      }}
                      className="mt-1"
                    >
                      <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-primary transition-colors" />
                    </motion.div>
                  </div>
                </motion.a>
              ))}

              {/* Extra CTA */}
              <motion.div
                whileHover={{ y: -5 }}
                className="relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br from-primary to-secondary text-white shadow-2xl"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-5">
                    <MessageCircle className="w-7 h-7" />
                  </div>

                  <h3 className="text-2xl font-bold mb-3">
                    Have a Project Idea?
                  </h3>

                  <p className="text-white/80 leading-relaxed mb-6">
                    Let's turn your ideas into modern, scalable, and impactful
                    digital experiences.
                  </p>

                  <motion.a
                    href="https://wa.me/6281318281410"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.03,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-primary font-semibold hover:shadow-xl transition-all"
                  >
                    Start a Conversation
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
