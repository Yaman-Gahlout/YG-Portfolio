import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdDownload } from "react-icons/md";

export default function HeroContent() {
  return (
    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
      {/* Available Badge */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-green-500/20 bg-green-500/10 backdrop-blur-xl"
      >
        <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></span>

        <p className="text-green-300 font-medium text-sm sm:text-base">
          Available for Internship
        </p>
      </motion.div>

      {/* Greeting */}

      <motion.p
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-8 text-lg sm:text-xl font-semibold text-violet-400"
      >
        👋 Hello, I'm
      </motion.p>

      {/* Name */}

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-2 font-black leading-tight"
      >
        <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
          Yaman
        </span>

        <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white">
          Gahlout
        </span>
      </motion.h1>

      {/* Typewriter */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-6 h-14 text-xl sm:text-2xl lg:text-3xl font-semibold text-cyan-300"
      >
        <TypeAnimation
          sequence={[
            "Frontend Developer",
            2000,
            "MERN Stack Developer",
            2000,
            "React Developer",
            2000,
            "Java Programmer",
            2000,
            "Problem Solver",
            2000,
          ]}
          speed={50}
          repeat={Infinity}
        />
      </motion.div>

      {/* Description */}

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-5 max-w-xl text-slate-300 leading-8 text-base sm:text-lg"
      >
        Passionate about building modern, responsive and scalable web
        applications using the MERN Stack. I enjoy solving problems, creating
        beautiful user interfaces, and continuously learning new technologies.
      </motion.p>

      {/* Buttons */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
      >
        <NavLink to="/contact" className="w-full sm:w-auto">
          <button className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold shadow-lg shadow-violet-500/30 hover:scale-105 transition duration-300">
            Hire Me
          </button>
        </NavLink>

        <NavLink to="/projects" className="w-full sm:w-auto">
          <button className="w-full px-8 py-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl text-white hover:bg-white/10 transition duration-300">
            View Projects
          </button>
        </NavLink>

        <a
          href="/Yaman_Gahlout_Resume_2.pdf"
          download
          className="w-full sm:w-auto"
        >
          <button className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-cyan-500 text-cyan-300 hover:bg-cyan-500 hover:text-white transition duration-300">
            <MdDownload size={22} />
            Resume
          </button>
        </a>
      </motion.div>

      {/* Social Icons */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="mt-10 flex gap-5 mb-3"
      >
        {[
          {
            icon: <FaGithub />,
            link: "https://github.com/Yaman-Gahlout",
          },
          {
            icon: <FaLinkedin />,
            link: "https://www.linkedin.com/in/yaman-gahlout-751349260/",
          },
          {
            icon: <MdEmail />,
            link: "mailto:yamangahlout123@gmail.com",
          },
        ].map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              y: -6,
              scale: 1.15,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white text-2xl hover:bg-violet-600 transition"
          >
            {item.icon}
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}
