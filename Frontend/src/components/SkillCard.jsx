import { motion } from "framer-motion";

export default function SkillCard({
  icon: Icon,
  title,
  color = "from-violet-500 to-cyan-500",
  level = 90,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      transition={{
        duration: 0.5,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        bg-white/5
        backdrop-blur-xl
        border
        border-white/10
        p-6
        shadow-xl
      "
    >
      {/* Glow */}

      <div
        className={`
          absolute
          -top-12
          -right-12
          w-32
          h-32
          rounded-full
          bg-gradient-to-r
          ${color}
          opacity-20
          blur-3xl
          group-hover:opacity-40
          transition
          duration-500
        `}
      />

      {/* Icon */}

      <motion.div
        whileHover={{
          rotate: 10,
          scale: 1.15,
        }}
        className={`
          w-16
          h-16
          rounded-2xl
          bg-gradient-to-r
          ${color}
          flex
          items-center
          justify-center
          text-white
          text-3xl
          shadow-lg
        `}
      >
        <Icon />
      </motion.div>

      {/* Title */}

      <h3
        className="
          mt-6
          text-xl
          font-semibold
          text-white
        "
      >
        {title}
      </h3>

      {/* Skill Level */}

      <div className="mt-5">
        <div className="flex justify-between mb-2">
          <span className="text-slate-400 text-sm">Proficiency</span>

          <span className="text-violet-300 text-sm font-semibold">
            {level}%
          </span>
        </div>

        {/* Progress Bar */}

        <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
          <motion.div
            initial={{
              width: 0,
            }}
            whileInView={{
              width: `${level}%`,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
            }}
            className={`
              h-full
              rounded-full
              bg-gradient-to-r
              ${color}
            `}
          />
        </div>
      </div>

      {/* Bottom Label */}

      <div className="mt-5">
        <span
          className="
            inline-block
            px-3
            py-1
            rounded-full
            text-xs
            bg-white/10
            text-slate-300
          "
        >
          Always Learning 🚀
        </span>
      </div>
    </motion.div>
  );
}
