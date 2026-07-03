import { motion } from "framer-motion";
import { HiSparkles } from "react-icons/hi";

export default function AboutHeader() {
  return (
    <div className="flex flex-col items-center text-center mb-16">
      {/* Small Badge */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
        }}
        className="
          inline-flex
          items-center
          gap-2
          px-5
          py-2
          rounded-full
          bg-violet-500/10
          border
          border-violet-500/20
          backdrop-blur-xl
          text-violet-300
          text-sm
          font-medium
        "
      >
        <HiSparkles className="text-violet-400 text-lg" />
        Get To Know Me
      </motion.div>

      {/* Main Heading */}

      <motion.h1
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
          delay: 0.2,
          duration: 0.6,
        }}
        className="
          mt-6
          text-4xl
          sm:text-5xl
          lg:text-6xl
          font-black
          leading-tight
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
          About Me
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
          delay: 0.4,
          duration: 0.6,
        }}
        className="
          mt-5
          max-w-2xl
          text-slate-400
          text-base
          sm:text-lg
          leading-8
          px-4
        "
      >
        I'm an MCA student passionate about creating modern web applications,
        solving real-world problems, and continuously learning new technologies
        to become a better software engineer.
      </motion.p>

      {/* Animated Underline */}

      <motion.div
        initial={{
          width: 0,
        }}
        whileInView={{
          width: 120,
        }}
        viewport={{ once: true }}
        transition={{
          delay: 0.6,
          duration: 0.8,
        }}
        className="
          h-1
          rounded-full
          bg-gradient-to-r
          from-violet-500
          via-fuchsia-500
          to-cyan-400
          mt-8
        "
      />
    </div>
  );
}
