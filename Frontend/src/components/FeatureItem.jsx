import { motion } from "framer-motion";
import { HiCheckCircle } from "react-icons/hi2";

export default function FeatureItem({ text, index }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -20,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.08,
        duration: 0.4,
      }}
      whileHover={{
        x: 6,
      }}
      className="
        group
        flex
        items-center
        gap-3
      "
    >
      {/* Icon */}

      <div
        className="
          w-8
          h-8
          rounded-full
          bg-gradient-to-r
          from-violet-600
          to-cyan-500
          flex
          items-center
          justify-center
          shrink-0
          shadow-lg
          shadow-violet-500/20
          transition-all
          duration-300
          group-hover:scale-110
        "
      >
        <HiCheckCircle className="text-white text-lg" />
      </div>

      {/* Text */}

      <p
        className="
          text-slate-300
          text-sm
          sm:text-base
          leading-6
          group-hover:text-white
          transition-colors
        "
      >
        {text}
      </p>
    </motion.div>
  );
}
