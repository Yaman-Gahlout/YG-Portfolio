import { motion } from "framer-motion";
import {
  HiOutlineLocationMarker,
  HiOutlineAcademicCap,
  HiOutlineCode,
} from "react-icons/hi";

import profileImage from "../assets/YamanGahlout.jpg";
import { useNavigate } from "react-router-dom";

export default function ProfileCard() {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
      }}
      whileHover={{
        y: -8,
      }}
      className="
        relative
        overflow-hidden
        rounded-3xl
        bg-white/5
        backdrop-blur-xl
        border
        border-white/10
        shadow-xl
        p-8
      "
    >
      {/* Glow */}

      <div
        className="
        absolute
        -top-10
        left-1/2
        -translate-x-1/2
        w-56
        h-56
        rounded-full
        bg-violet-500/20
        blur-[90px]
        "
      />

      {/* Image */}

      <div className="relative flex justify-center">
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="
          relative
          p-2
          rounded-full
          bg-gradient-to-r
          from-violet-500
          via-fuchsia-500
          to-cyan-400
          "
        >
          <img
            src={profileImage}
            alt="Yaman Gahlout"
            className="
            w-44
            h-44
            sm:w-52
            sm:h-52
            rounded-full
            object-cover
            border-4
            border-[#050816]
            "
          />
        </motion.div>
      </div>

      {/* Name */}

      <div className="relative mt-8 text-center">
        <h2
          className="
          text-3xl
          font-bold
          text-white
          "
        >
          Yaman Gahlout
        </h2>

        <p
          className="
          mt-2
          text-violet-400
          font-medium
        "
        >
          MERN Stack Developer
        </p>
      </div>

      {/* Divider */}

      <div
        className="
        my-8
        h-px
        bg-gradient-to-r
        from-transparent
        via-violet-500/40
        to-transparent
        "
      />

      {/* Info */}

      <div className="space-y-5">
        <div className="flex items-center gap-4">
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
            <HiOutlineAcademicCap
              className="
              text-violet-400
              text-2xl
              "
            />
          </div>

          <div>
            <p className="text-white font-semibold">MCA Student</p>

            <p className="text-slate-400 text-sm">JIIT, Noida</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div
            className="
            w-12
            h-12
            rounded-xl
            bg-cyan-500/10
            flex
            items-center
            justify-center
            "
          >
            <HiOutlineLocationMarker
              className="
              text-cyan-400
              text-2xl
              "
            />
          </div>

          <div>
            <p className="text-white font-semibold">Location</p>

            <p className="text-slate-400 text-sm">Noida, Uttar Pradesh</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div
            className="
            w-12
            h-12
            rounded-xl
            bg-pink-500/10
            flex
            items-center
            justify-center
            "
          >
            <HiOutlineCode
              className="
              text-pink-400
              text-2xl
              "
            />
          </div>

          <div>
            <p className="text-white font-semibold">Specialization</p>

            <p className="text-slate-400 text-sm">MERN Stack Development</p>
          </div>
        </div>
      </div>

      {/* Bottom Badge */}

      <motion.div
        whileHover={{
          scale: 1.05,
        }}
        className="
        mt-8
        rounded-2xl
        bg-gradient-to-r
        from-violet-600
        to-cyan-500
        text-center
        py-4
        text-white
        font-semibold
        "
        onClick={() => navigate("/contact")}
      >
        🚀 Open to Internship Opportunities
      </motion.div>
    </motion.div>
  );
}
