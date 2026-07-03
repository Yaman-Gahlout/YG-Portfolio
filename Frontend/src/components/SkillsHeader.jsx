import { motion } from "framer-motion";
import { HiSparkles } from "react-icons/hi";

export default function SkillsHeader() {
  return (
    <div className="text-center mb-16">
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

        <span className="text-violet-300 font-medium">Technical Skills</span>
      </motion.div>

      {/* Heading */}

      <motion.h1
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
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
          My Skills
        </span>
      </motion.h1>

      {/* Subtitle */}

      <motion.p
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: 0.4,
        }}
        className="
          mt-5
          max-w-2xl
          mx-auto
          px-4
          text-slate-400
          text-base
          sm:text-lg
          leading-8
        "
      >
        My technical toolkit includes programming languages, frontend
        technologies, backend frameworks, databases, and development tools that
        I use to build responsive, scalable and modern web applications.
      </motion.p>

      {/* Animated Line */}

      <motion.div
        initial={{
          width: 0,
        }}
        whileInView={{
          width: 130,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 0.6,
        }}
        className="
          h-1
          rounded-full
          mx-auto
          mt-8
          bg-gradient-to-r
          from-violet-500
          via-fuchsia-500
          to-cyan-400
        "
      />
    </div>
  );
}
