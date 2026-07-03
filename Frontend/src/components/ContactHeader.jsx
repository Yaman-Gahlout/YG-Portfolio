import { motion } from "framer-motion";
import { HiSparkles } from "react-icons/hi";
import { MdOutlineConnectWithoutContact } from "react-icons/md";

export default function ContactHeader() {
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
          bg-violet-500/10
          border
          border-violet-500/20
          backdrop-blur-xl
        "
      >
        <HiSparkles className="text-violet-400 text-lg" />

        <span className="text-violet-300 font-medium">Let's Connect</span>
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
          Get In Touch
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
          mt-6
          max-w-3xl
          mx-auto
          px-4
          text-slate-400
          text-base
          sm:text-lg
          leading-8
        "
      >
        Whether you have a project idea, internship opportunity, collaboration
        proposal, or simply want to connect, I'd be happy to hear from you.
        Let's create something meaningful together.
      </motion.p>

      {/* Quick Stats */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: 0.6,
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
          <MdOutlineConnectWithoutContact className="text-2xl text-violet-400" />

          <div className="text-left">
            <h3 className="font-bold text-white">Open to Work</h3>

            <p className="text-sm text-slate-400">Internship & Full-Time</p>
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
          <h3 className="text-white font-bold">Usually Replies</h3>

          <p className="text-sm text-slate-400">Within 24 Hours</p>
        </div>
      </motion.div>

      {/* Gradient Line */}

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 150 }}
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
