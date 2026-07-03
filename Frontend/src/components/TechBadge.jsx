import { motion } from "framer-motion";

const techColors = {
  React: "from-cyan-500 to-blue-500",
  ReactJS: "from-cyan-500 to-blue-500",

  JavaScript: "from-yellow-400 to-orange-500",

  HTML: "from-orange-500 to-red-500",
  HTML5: "from-orange-500 to-red-500",

  CSS: "from-blue-500 to-cyan-500",
  CSS3: "from-blue-500 to-cyan-500",

  TailwindCSS: "from-cyan-400 to-sky-500",
  "Tailwind CSS": "from-cyan-400 to-sky-500",

  Node: "from-green-500 to-emerald-500",
  "Node.js": "from-green-500 to-emerald-500",

  Express: "from-gray-500 to-gray-700",
  "Express.js": "from-gray-500 to-gray-700",

  MongoDB: "from-green-500 to-lime-500",

  SocketIO: "from-violet-500 to-fuchsia-500",
  "Socket.IO": "from-violet-500 to-fuchsia-500",

  Redux: "from-violet-500 to-purple-600",

  Java: "from-orange-500 to-red-500",

  MySQL: "from-blue-600 to-indigo-600",
};

export default function TechBadge({ name }) {
  const color = techColors[name] || "from-violet-500 to-cyan-500";

  return (
    <motion.span
      whileHover={{
        y: -2,
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="
        relative
        overflow-hidden
        inline-flex
        items-center
        justify-center
        px-4
        py-2
        rounded-full
        text-sm
        font-medium
        text-white
        bg-white/5
        border
        border-white/10
        backdrop-blur-xl
        transition-all
        duration-300
        group
      "
    >
      {/* Glow */}

      <span
        className={`
          absolute
          inset-0
          opacity-0
          group-hover:opacity-100
          transition
          duration-300
          bg-gradient-to-r
          ${color}
        `}
      />

      {/* Text */}

      <span className="relative z-10">{name}</span>
    </motion.span>
  );
}
