import { motion } from "framer-motion";
import { HiPaperAirplane } from "react-icons/hi2";

export default function ContactForm({
  submitHandler,
  nameEle,
  emailEle,
  subjectEle,
  messageEle,
  loading,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
      }}
      className="
      relative
      overflow-hidden
      rounded-3xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-2xl
      p-8
      "
    >
      {/* Glow */}

      <div
        className="
        absolute
        -bottom-24
        -left-24
        h-72
        w-72
        rounded-full
        bg-cyan-500/20
        blur-[120px]
        "
      />

      <div className="relative z-10">
        {/* Heading */}

        <h2 className="text-3xl font-bold text-white">Send a Message</h2>

        <p className="mt-3 text-slate-400">
          Fill out the form below and I'll get back to you as soon as possible.
        </p>

        <form onSubmit={submitHandler} className="mt-10 space-y-6">
          {/* Row */}

          <div className="grid md:grid-cols-2 gap-6">
            {/* Name */}

            <div>
              <label className="text-slate-300 mb-2 block">Name</label>

              <input
                ref={nameEle}
                required
                type="text"
                placeholder="John Doe"
                className="
                w-full
                rounded-2xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                px-5
                py-4
                text-white
                outline-none
                transition
                duration-300
                placeholder:text-slate-500
                focus:border-violet-500
                focus:ring-2
                focus:ring-violet-500/20
                "
              />
            </div>

            {/* Email */}

            <div>
              <label className="text-slate-300 mb-2 block">Email</label>

              <input
                ref={emailEle}
                required
                type="email"
                placeholder="john@example.com"
                className="
                w-full
                rounded-2xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                px-5
                py-4
                text-white
                outline-none
                transition
                duration-300
                placeholder:text-slate-500
                focus:border-violet-500
                focus:ring-2
                focus:ring-violet-500/20
                "
              />
            </div>
          </div>

          {/* Subject */}

          <div>
            <label className="text-slate-300 mb-2 block">Subject</label>

            <input
              ref={subjectEle}
              required
              type="text"
              placeholder="Project Discussion"
              className="
              w-full
              rounded-2xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              px-5
              py-4
              text-white
              outline-none
              transition
              duration-300
              placeholder:text-slate-500
              focus:border-violet-500
              focus:ring-2
              focus:ring-violet-500/20
              "
            />
          </div>

          {/* Message */}

          <div>
            <label className="text-slate-300 mb-2 block">Message</label>

            <textarea
              ref={messageEle}
              required
              rows={6}
              placeholder="Write your message..."
              className="
              w-full
              rounded-2xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              px-5
              py-4
              text-white
              outline-none
              resize-none
              transition
              duration-300
              placeholder:text-slate-500
              focus:border-violet-500
              focus:ring-2
              focus:ring-violet-500/20
              "
            />
          </div>

          {/* Button */}

          <motion.button
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.97,
            }}
            disabled={loading}
            className="
            w-full
            rounded-2xl
            bg-gradient-to-r
            from-violet-600
            via-fuchsia-500
            to-cyan-500
            py-4
            font-semibold
            text-white
            shadow-xl
            shadow-violet-500/20
            flex
            items-center
            justify-center
            gap-3
            transition
            disabled:opacity-70
            "
          >
            <HiPaperAirplane className="text-xl" />

            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
}
