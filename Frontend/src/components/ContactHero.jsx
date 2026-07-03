import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";
import { BsPatchCheckFill } from "react-icons/bs";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Glow */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-violet-600/20 blur-[120px]" />

        <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-[150px]" />

        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-[150px]" />
      </div>

      <div className="max-w-5xl mx-auto text-center">
        {/* Small Badge */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-violet-500/20
          bg-violet-500/10
          px-5
          py-2
          backdrop-blur-xl
          "
        >
          <HiSparkles className="text-violet-400" />

          <span className="text-violet-300 font-medium">
            Let's Build Together
          </span>
        </motion.div>

        {/* Heading */}

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.2,
            duration: 0.6,
          }}
          className="
          mt-8
          text-5xl
          sm:text-6xl
          lg:text-7xl
          font-black
          leading-tight
          "
        >
          <span className="text-white">Have an</span>

          <br />

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
            Amazing Idea?
          </span>
        </motion.h1>

        {/* Subtitle */}

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.35,
            duration: 0.6,
          }}
          className="
          mt-8
          text-lg
          sm:text-xl
          leading-9
          text-slate-400
          max-w-3xl
          mx-auto
          px-4
          "
        >
          I'm always excited to collaborate on innovative web applications,
          open-source projects, internship opportunities and challenging ideas.
          Let's create something impactful together.
        </motion.p>

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.55,
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
          <a
            href="#contact-form"
            className="
            group
            flex
            items-center
            gap-3
            rounded-2xl
            bg-gradient-to-r
            from-violet-600
            via-fuchsia-500
            to-cyan-500
            px-8
            py-4
            text-white
            font-semibold
            shadow-xl
            shadow-violet-500/20
            transition
            hover:scale-105
            "
          >
            Let's Talk
            <FaArrowRight className="transition group-hover:translate-x-1" />
          </a>

          <div
            className="
            flex
            items-center
            gap-3
            rounded-2xl
            border
            border-white/10
            bg-white/5
            px-6
            py-4
            backdrop-blur-xl
            "
          >
            <BsPatchCheckFill className="text-green-400 text-xl" />

            <div className="text-left">
              <h3 className="text-white font-semibold">Open to Work</h3>

              <p className="text-sm text-slate-400">Internship • Full-Time</p>
            </div>
          </div>
        </motion.div>

        {/* Stats */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.8,
            duration: 0.7,
          }}
          className="
          mt-16
          grid
          grid-cols-2
          lg:grid-cols-4
          gap-5
          "
        >
          {[
            {
              number: "10+",
              text: "Projects",
            },

            {
              number: "MERN",
              text: "Stack",
            },

            {
              number: "100%",
              text: "Responsive",
            },

            {
              number: "24h",
              text: "Response",
            },
          ].map((item) => (
            <div
              key={item.text}
              className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              py-7
              "
            >
              <h2
                className="
                text-3xl
                font-bold
                text-white
                "
              >
                {item.number}
              </h2>

              <p className="mt-2 text-slate-400">{item.text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
