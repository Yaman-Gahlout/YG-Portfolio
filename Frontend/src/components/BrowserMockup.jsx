import { motion } from "framer-motion";
import { FaExpandAlt } from "react-icons/fa";

export default function BrowserMockup({ image, title }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
      }}
      transition={{
        duration: 0.4,
      }}
      className="
      relative
      overflow-hidden
      rounded-3xl
      bg-[#111827]
      border
      border-white/10
      shadow-2xl
      "
    >
      {/* Browser Header */}

      <div
        className="
        h-12
        px-5
        flex
        items-center
        justify-between
        bg-[#1E293B]
        border-b
        border-white/10
        "
      >
        {/* Browser Dots */}

        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />

          <div className="w-3 h-3 rounded-full bg-yellow-500" />

          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>

        {/* Fake URL */}

        <div
          className="
          hidden
          sm:flex
          items-center
          justify-center
          w-[60%]
          rounded-full
          bg-[#334155]
          py-1
          text-xs
          text-slate-400
          "
        >
          {title.toLowerCase().replace(/\s+/g, "-")}.app
        </div>

        <FaExpandAlt className="text-slate-400 text-sm" />
      </div>

      {/* Image */}

      <div className="relative overflow-hidden">
        <motion.img
          whileHover={{
            scale: 1.08,
          }}
          transition={{
            duration: 0.8,
          }}
          src={image}
          alt={title}
          className="
          w-full
          h-[220px]
          sm:h-[280px]
          lg:h-[340px]
          object-cover
          "
        />

        {/* Gradient */}

        <div
          className="
          absolute
          inset-0
          bg-gradient-to-t
          from-[#050816]
          via-transparent
          to-transparent
          "
        />

        {/* Hover Overlay */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileHover={{
            opacity: 1,
          }}
          className="
          absolute
          inset-0
          bg-black/40
          backdrop-blur-[2px]
          flex
          items-center
          justify-center
          "
        >
          <motion.div
            initial={{
              scale: 0.8,
            }}
            whileHover={{
              scale: 1,
            }}
            className="
            px-6
            py-3
            rounded-full
            bg-white/10
            backdrop-blur-xl
            border
            border-white/20
            text-white
            font-semibold
            "
          >
            Preview
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Glow */}

      <div
        className="
        absolute
        bottom-0
        left-0
        w-full
        h-20
        bg-gradient-to-t
        from-violet-500/20
        to-transparent
        pointer-events-none
        "
      />
    </motion.div>
  );
}
