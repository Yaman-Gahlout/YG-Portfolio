import { motion } from "framer-motion";
import {
  HiOutlineUser,
  HiOutlineLightBulb,
  HiOutlineDownload,
} from "react-icons/hi";

const techStack = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Redux",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Java",
  "Git",
  "GitHub",
];

export default function BioCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="
        relative
        overflow-hidden
        rounded-3xl
        bg-white/5
        backdrop-blur-xl
        border
        border-white/10
        shadow-xl
        p-6
        sm:p-8
      "
    >
      {/* Glow */}

      <div
        className="
          absolute
          top-0
          right-0
          w-56
          h-56
          bg-cyan-500/10
          rounded-full
          blur-[120px]
        "
      />

      {/* Bio */}

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div
            className="
              w-12
              h-12
              rounded-xl
              bg-violet-500/10
              flex
              items-center
              justify-center
            "
          >
            <HiOutlineUser className="text-2xl text-violet-400" />
          </div>

          <h2 className="text-2xl font-bold text-white">Biography</h2>
        </div>

        <p className="text-slate-300 leading-8 text-base sm:text-lg">
          I'm an MCA student at
          <span className="text-violet-400 font-semibold">
            {" "}
            JIIT Noida
          </span>{" "}
          with a strong passion for Full Stack Web Development. I enjoy
          designing responsive user interfaces, building REST APIs, solving Data
          Structures & Algorithms problems, and continuously learning modern
          technologies.
          <br />
          <br />
          My goal is to become a Software Development Engineer where I can build
          scalable products, contribute to impactful projects, and grow as a
          developer.
        </p>
      </div>

      {/* Career Goal */}

      <motion.div
        whileHover={{
          y: -5,
        }}
        className="
          mt-8
          rounded-2xl
          bg-gradient-to-r
          from-violet-500/10
          to-cyan-500/10
          border
          border-white/10
          p-5
        "
      >
        <div className="flex gap-3 items-center">
          <HiOutlineLightBulb className="text-3xl text-yellow-400" />

          <h3 className="text-xl font-semibold text-white">Career Objective</h3>
        </div>

        <p className="mt-4 text-slate-300 leading-7">
          Seeking an internship or Software Developer role where I can apply my
          MERN Stack skills, strengthen my problem-solving abilities, and
          contribute to real-world projects while learning from experienced
          engineers.
        </p>
      </motion.div>

      {/* Tech Stack */}

      <div className="mt-10">
        <h3 className="text-xl font-bold text-white mb-5">Tech Stack</h3>

        <div className="flex flex-wrap gap-3">
          {techStack.map((tech) => (
            <motion.span
              key={tech}
              whileHover={{
                scale: 1.08,
                y: -3,
              }}
              className="
                px-4
                py-2
                rounded-full
                bg-white/5
                border
                border-violet-500/20
                text-slate-200
                text-sm
                backdrop-blur-lg
                cursor-pointer
                hover:border-violet-400
                hover:text-violet-300
                transition
              "
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Resume Button */}

      <motion.a
        href="/Yaman_Gahlout_Resume_2.pdf"
        download
        whileHover={{
          scale: 1.04,
        }}
        whileTap={{
          scale: 0.96,
        }}
        className="
          mt-10
          inline-flex
          items-center
          gap-3
          px-7
          py-4
          rounded-xl
          bg-gradient-to-r
          from-violet-600
          to-cyan-500
          text-white
          font-semibold
          shadow-lg
          shadow-violet-500/20
        "
      >
        <HiOutlineDownload className="text-xl" />
        Download Resume
      </motion.a>
    </motion.div>
  );
}
