import { motion } from "framer-motion";
import { HiSparkles } from "react-icons/hi";
import { HiOutlineCodeBracketSquare } from "react-icons/hi2";

export default function ProjectsHeader() {
  return (
    <div className="text-center mb-20">
      {/* Badge */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="
          inline-flex
          items-center
          gap-2
          px-5
          py-2
          rounded-full
          border
          border-violet-500/20
          bg-violet-500/10
          backdrop-blur-xl
        "
      >
        <HiSparkles className="text-violet-400 text-lg" />

        <span className="text-violet-300 font-medium">My Recent Work</span>
      </motion.div>

      {/* Heading */}

      <motion.h1
        initial={{
          opacity: 0,
          y: 35,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: 0.2,
        }}
        className="
          mt-6
          text-4xl
          sm:text-5xl
          lg:text-6xl
          font-black
        "
      >
        <span
          className="
            bg-gradient-to-r
            from-violet-500
            via-fuchsia-500
            to-cyan-400
            bg-clip-text
            text-transparent
          "
        >
          Featured Projects
        </span>
      </motion.h1>

      {/* Subtitle */}

      <motion.p
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: 0.4,
        }}
        className="
          max-w-3xl
          mx-auto
          mt-6
          px-4
          text-slate-400
          text-base
          sm:text-lg
          leading-8
        "
      >
        A collection of projects that showcase my experience in full-stack web
        development, frontend engineering, API integration, responsive UI
        design, and problem-solving using modern technologies.
      </motion.p>

      {/* Stats */}

      <motion.div
        initial={{
          opacity: 0,
          y: 35,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          delay: 0.6,
          duration: 0.6,
        }}
        className="
          mt-10
          flex
          flex-wrap
          justify-center
          gap-5
        "
      >
        <div
          className="
            flex
            items-center
            gap-3
            px-6
            py-3
            rounded-2xl
            bg-white/5
            backdrop-blur-xl
            border
            border-white/10
          "
        >
          <HiOutlineCodeBracketSquare className="text-violet-400 text-2xl" />

          <div className="text-left">
            <h3 className="text-white font-bold">3+</h3>

            <p className="text-slate-400 text-sm">Projects Built</p>
          </div>
        </div>

        <div
          className="
            px-6
            py-3
            rounded-2xl
            bg-white/5
            backdrop-blur-xl
            border
            border-white/10
          "
        >
          <h3 className="text-white font-bold">MERN Stack</h3>

          <p className="text-slate-400 text-sm">Primary Tech</p>
        </div>

        <div
          className="
            px-6
            py-3
            rounded-2xl
            bg-white/5
            backdrop-blur-xl
            border
            border-white/10
          "
        >
          <h3 className="text-white font-bold">Responsive UI</h3>

          <p className="text-slate-400 text-sm">Modern Design</p>
        </div>
      </motion.div>

      {/* Gradient Line */}

      <motion.div
        initial={{
          width: 0,
        }}
        whileInView={{
          width: 160,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 0.8,
        }}
        className="
          h-1
          rounded-full
          mx-auto
          mt-10
          bg-gradient-to-r
          from-violet-500
          via-fuchsia-500
          to-cyan-400
        "
      />
    </div>
  );
}
