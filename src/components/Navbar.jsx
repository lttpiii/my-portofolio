// Navbar.jsx
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sun,
  Moon,
  Menu,
  X,
  FileText,
  Home,
  User,
  Briefcase,
  Award,
  Mail,
} from "lucide-react";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [manualScrolling, setManualScrolling] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // =========================
  // Navbar background on scroll
  // =========================
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // =========================
  // Track active section
  // =========================
  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection("");
      return;
    }

    const sections = ["about", "skills", "projects", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        } else if (window.scrollY < 100) {
          setActiveSection("");
        }
      },
      {
        threshold: [0.2, 0.4, 0.6, 0.8],
        rootMargin: "-20% 0px -35% 0px",
      },
    );

    const timeout = setTimeout(() => {
      sections.forEach((id) => {
        const el = document.getElementById(id);

        if (el) {
          observer.observe(el);
        }
      });
    }, 100);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [location.pathname]);

  // =========================
  // Sync URL hash with active section
  // =========================
  useEffect(() => {
    if (location.pathname !== "/") return;

    if (activeSection) {
      window.history.replaceState(null, "", `/#${activeSection}`);
    } else {
      window.history.replaceState(null, "", "/");
    }
  }, [activeSection, location.pathname]);

  // =========================
  // Handle navigation
  // =========================
  const handleNavClick = (e, link) => {
    if (link.type === "hash") {
      e.preventDefault();

      const sectionId = link.section;

      // From another page -> navigate
      if (location.pathname !== "/") {
        navigate(`/#${sectionId}`);
      } else {
        // Already on home -> smooth scroll
        const el = document.getElementById(sectionId);

        if (el) {
          el.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

          setActiveSection(sectionId);
        }
      }

      setIsOpen(false);
      return;
    }

    // Normal page navigation
    setIsOpen(false);

    // Handle Home button
    if (link.path === "/") {
      // Already on homepage
      if (location.pathname === "/") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });

        setActiveSection("");

        window.history.replaceState(null, "", "/");
      } else {
        navigate("/");
      }
    }
  };

  // =========================
  // Navigation items
  // =========================
  const navLinks = [
    {
      path: "/",
      label: "Home",
      icon: Home,
      type: "page",
      section: null,
    },
    {
      path: "/#about",
      label: "About",
      icon: User,
      type: "hash",
      section: "about",
    },
    {
      path: "/#skills",
      label: "Skills",
      icon: Briefcase,
      type: "hash",
      section: "skills",
    },
    {
      path: "/#projects",
      label: "Projects",
      icon: Award,
      type: "hash",
      section: "projects",
    },
    {
      path: "/cv",
      label: "CV",
      icon: FileText,
      type: "page",
      section: null,
    },
    {
      path: "/#contact",
      label: "Contact",
      icon: Mail,
      type: "hash",
      section: "contact",
    },
  ];

  // =========================
  // Active link checker
  // =========================
  const isLinkActive = (link) => {
    // Hash sections
    if (link.type === "hash") {
      return location.pathname === "/" && activeSection === link.section;
    }

    // Home
    if (link.path === "/") {
      return location.pathname === "/" && activeSection === "";
    }

    // Other pages
    return location.pathname === link.path;
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => {
              setIsOpen(false);
              setActiveSection("");
            }}
            className="flex items-center gap-2"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg"
            >
              LI
            </motion.div>

            <span className="font-bold text-xl dark:text-white text-gray-900 hidden sm:block">
              Luthfi
              <span className="text-primary">.</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = isLinkActive(link);

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    active
                      ? "text-primary bg-primary/10"
                      : "text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </motion.button>

            {/* Mobile Toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            className="md:hidden glass border-t dark:border-gray-700 overflow-hidden"
          >
            <div className="px-4 py-2 space-y-1">
              {navLinks.map((link) => {
                const active = isLinkActive(link);

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={(e) => handleNavClick(e, link)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      active
                        ? "text-primary bg-primary/10"
                        : "text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    <link.icon className="w-4 h-4" />
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
