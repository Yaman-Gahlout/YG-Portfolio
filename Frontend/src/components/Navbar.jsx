import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineMenuAlt3,
  HiOutlineX,
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineCode,
  HiOutlineFolder,
  HiOutlineMail,
} from "react-icons/hi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      name: "Home",
      path: "/",
      icon: <HiOutlineHome size={20} />,
    },
    {
      name: "About",
      path: "/about",
      icon: <HiOutlineUser size={20} />,
    },
    {
      name: "Skills",
      path: "/skills",
      icon: <HiOutlineCode size={20} />,
    },
    {
      name: "Projects",
      path: "/projects",
      icon: <HiOutlineFolder size={20} />,
    },
    {
      name: "Contact",
      path: "/contact",
      icon: <HiOutlineMail size={20} />,
    },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-xl bg-[#050816]/80 border-b border-white/10 shadow-xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="h-20 flex items-center justify-between">
            {/* Logo */}

            <NavLink to="/">
              <motion.h1
                whileHover={{
                  scale: 1.08,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="text-4xl font-black bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent cursor-pointer"
              >
                YG.
              </motion.h1>
            </NavLink>

            {/* Desktop Menu */}

            <div className="hidden md:flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-3 py-2">
              {navItems.map((item) => (
                <NavLink key={item.path} to={item.path}>
                  {({ isActive }) => (
                    <motion.div
                      whileHover={{
                        y: -2,
                        scale: 1.05,
                      }}
                      whileTap={{
                        scale: 0.95,
                      }}
                      className={`relative flex items-center gap-2 px-5 py-2 rounded-full font-semibold transition-all duration-300 overflow-hidden ${
                        isActive
                          ? "text-white"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="navbar-active"
                          className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 shadow-lg shadow-violet-500/40"
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                          }}
                        />
                      )}

                      <span className="relative z-10">{item.icon}</span>

                      <span className="relative z-10">{item.name}</span>
                    </motion.div>
                  )}
                </NavLink>
              ))}
            </div>

            {/* Resume Button */}

            <motion.a
              href="/Yaman_Gahlout_Resume_2.pdf"
              download
              target="_blank"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="hidden md:flex px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 shadow-lg shadow-violet-600/40 hover:shadow-cyan-500/40 transition-all duration-300"
            >
              Resume
            </motion.a>

            {/* Mobile Menu Button */}

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white text-3xl"
            >
              {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.3,
            }}
            className="fixed top-20 left-0 w-full z-40 md:hidden backdrop-blur-2xl bg-[#050816]/95 border-b border-white/10"
          >
            <div className="flex flex-col p-6 gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                >
                  {({ isActive }) => (
                    <motion.div
                      whileHover={{
                        x: 8,
                        scale: 1.02,
                      }}
                      whileTap={{
                        scale: 0.98,
                      }}
                      className={`flex items-center gap-4 px-5 py-4 rounded-xl font-semibold transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-lg shadow-violet-500/30"
                          : "text-gray-300 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <span>{item.icon}</span>
                      <span>{item.name}</span>
                    </motion.div>
                  )}
                </NavLink>
              ))}

              {/* Resume Button */}

              <motion.a
                href="/Yaman_Gahlout_Resume_2.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="mt-4 w-full text-center py-4 rounded-xl font-bold text-white bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 shadow-lg shadow-violet-500/40"
                onClick={() => setMenuOpen(false)}
              >
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer so content isn't hidden behind the fixed navbar */}
      <div className="h-20" />
    </>
  );
}
