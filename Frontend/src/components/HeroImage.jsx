import { motion } from "framer-motion";
import heroImage from "../assets/hero2.svg";

import { FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { SiMongodb, SiJavascript, SiTailwindcss } from "react-icons/si";

const techIcons = [
  {
    Icon: FaReact,
    className:
      "top-4 left-6 sm:top-6 sm:left-8 lg:-top-2 lg:left-8 text-cyan-400",
  },
  {
    Icon: FaNodeJs,
    className:
      "top-10 right-4 sm:top-12 sm:right-6 lg:top-10 lg:right-0 text-green-500",
  },
  {
    Icon: SiMongodb,
    className:
      "bottom-20 left-4 sm:bottom-24 sm:left-6 lg:bottom-20 lg:left-0 text-green-400",
  },
  {
    Icon: SiJavascript,
    className:
      "bottom-6 right-6 sm:bottom-8 sm:right-8 lg:bottom-4 lg:right-10 text-yellow-400",
  },
  {
    Icon: FaJava,
    className: "top-1/2 left-0 lg:-left-6 text-orange-500",
  },
  {
    Icon: SiTailwindcss,
    className: "top-1/2 right-0 lg:-right-6 text-sky-400",
  },
];

export default function HeroImage() {
  return (
    <div className="relative flex items-center justify-center w-full">
      {/* Spotlight */}

      <div
        className="
        absolute
        w-[320px]
        h-[320px]
        sm:w-[420px]
        sm:h-[420px]
        lg:w-[500px]
        lg:h-[500px]
        rounded-full
        bg-violet-500/10
        blur-[120px]
        "
      />

      {/* Animated Glow */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="
        absolute
        w-[260px]
        h-[260px]
        sm:w-[340px]
        sm:h-[340px]
        lg:w-[420px]
        lg:h-[420px]
        rounded-full
        bg-gradient-to-r
        from-violet-500/30
        via-fuchsia-500/20
        to-cyan-500/30
        blur-[80px]
        "
      />

      {/* Rotating Ring */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
        hidden
        lg:block
        absolute
        w-[480px]
        h-[480px]
        rounded-full
        border
        border-violet-500/20
        "
      />

      {/* Second Ring */}

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
        hidden
        lg:block
        absolute
        w-[560px]
        h-[560px]
        rounded-full
        border
        border-cyan-500/10
        "
      />

      {/* Image */}

      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        whileHover={{
          scale: 1.03,
        }}
        className="relative z-20"
      >
        <img
          src={heroImage}
          alt="Yaman Gahlout"
          className="
          w-full
          max-w-[260px]
          sm:max-w-[340px]
          md:max-w-[420px]
          lg:max-w-[480px]
          drop-shadow-[0_20px_60px_rgba(124,58,237,0.45)]
          "
        />
      </motion.div>

      {/* Floating Icons */}

      {/* Floating Tech Icons */}

      {techIcons.map(({ Icon, className }, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 3,
            delay: index * 0.25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{
            scale: 1.15,
            rotate: 8,
          }}
          className={`
      absolute
      ${className}
      flex
      items-center
      justify-center

      w-10 h-10
      sm:w-12 sm:h-12
      lg:w-14 lg:h-14

      rounded-xl
      bg-white/10
      backdrop-blur-xl
      border border-white/10
      shadow-lg

      text-xl
      sm:text-2xl
      lg:text-3xl

      z-30
    `}
        >
          <Icon />
        </motion.div>
      ))}

      {/* Projects Card */}

      <motion.div
        whileHover={{
          y: -6,
        }}
        className="
        hidden
        md:block
        absolute
        top-10
        left-0
        lg:-left-8
        px-5
        py-4
        rounded-2xl
        bg-white/10
        backdrop-blur-xl
        border
        border-white/10
        z-30
        "
      >
        <h2 className="text-3xl font-bold text-violet-400">2+</h2>

        <p className="text-slate-300 text-sm">Major Projects</p>
      </motion.div>

      {/* Tech Card */}

      <motion.div
        whileHover={{
          y: -6,
        }}
        className="
        hidden
        md:block
        absolute
        bottom-10
        right-0
        lg:-right-8
        px-5
        py-4
        rounded-2xl
        bg-white/10
        backdrop-blur-xl
        border
        border-white/10
        z-30
        "
      >
        <p className="text-slate-400 text-sm mb-2">Tech Stack</p>

        <div className="flex gap-3 text-2xl">
          <FaReact className="text-cyan-400" />
          <FaNodeJs className="text-green-500" />
          <SiMongodb className="text-green-400" />
          <SiJavascript className="text-yellow-400" />
        </div>
      </motion.div>
    </div>
  );
}
