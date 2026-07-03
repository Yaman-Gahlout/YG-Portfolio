import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { BsCheckCircleFill } from "react-icons/bs";

const contactItems = [
  {
    icon: <MdEmail />,
    title: "Email",
    value: "yamangahlout123@gmail.com",
    link: "mailto:yamangahlout123@gmail.com",
  },
  {
    icon: <LuPhone />,
    title: "Phone",
    value: "+91 9548905852",
    link: "tel:+919548905852",
  },
  {
    icon: <FaLocationDot />,
    title: "Location",
    value: "Noida, Uttar Pradesh",
    link: "#",
  },
];

const strengths = [
  "Clean & Maintainable Code",
  "Responsive UI Development",
  "REST API Integration",
  "MERN Stack Development",
  "Problem Solving",
  "Quick Learner",
];

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="
      relative
      overflow-hidden
      rounded-[32px]
      border
      border-white/10
      bg-white/5
      backdrop-blur-2xl
      p-8
      "
    >
      {/* Glow */}

      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-violet-500/20 blur-[140px]" />

      <div className="relative z-10">
        {/* Profile */}

        <div className="flex items-center gap-5">
          <div
            className="
            h-20
            w-20
            rounded-full
            bg-gradient-to-r
            from-violet-600
            via-fuchsia-500
            to-cyan-500
            flex
            items-center
            justify-center
            text-3xl
            font-bold
            text-white
            "
          >
            YG
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white">Yaman Gahlout</h2>

            <p className="text-slate-400 mt-1">MERN Stack Developer</p>
          </div>
        </div>

        {/* Availability */}

        <div
          className="
          mt-8
          rounded-2xl
          border
          border-green-500/30
          bg-green-500/10
          p-5
          "
        >
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />

            <h3 className="text-white font-semibold">
              Available for Internship & Full-Time
            </h3>
          </div>

          <p className="mt-3 text-slate-300 leading-7">
            I'm currently looking for exciting opportunities where I can
            contribute, learn and grow as a Software Engineer.
          </p>
        </div>

        {/* Contact */}

        <div className="mt-10 space-y-5">
          {contactItems.map((item) => (
            <motion.a
              key={item.title}
              href={item.link}
              whileHover={{ x: 8 }}
              className="
              flex
              items-center
              gap-5
              rounded-2xl
              border
              border-white/10
              bg-white/5
              p-5
              hover:border-violet-500/40
              transition
              "
            >
              <div
                className="
                h-12
                w-12
                rounded-xl
                bg-gradient-to-r
                from-violet-600
                to-cyan-500
                flex
                items-center
                justify-center
                text-white
                text-xl
                "
              >
                {item.icon}
              </div>

              <div>
                <p className="text-slate-400 text-sm">{item.title}</p>

                <p className="text-white font-medium">{item.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Why Work With Me */}

        <div className="mt-10">
          <h3 className="text-white text-xl font-semibold mb-5">
            Why Work With Me?
          </h3>

          <div className="space-y-4">
            {strengths.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <BsCheckCircleFill className="text-green-400" />

                <span className="text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Social */}

        <div className="mt-10 flex gap-4">
          <a
            href="https://github.com/Yaman-Gahlout"
            target="_blank"
            rel="noreferrer"
            className="
            flex-1
            rounded-2xl
            bg-white/5
            border
            border-white/10
            py-4
            flex
            justify-center
            text-white
            text-2xl
            hover:border-violet-500
            transition
            "
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/yaman-gahlout-751349260/"
            target="_blank"
            rel="noreferrer"
            className="
            flex-1
            rounded-2xl
            bg-white/5
            border
            border-white/10
            py-4
            flex
            justify-center
            text-white
            text-2xl
            hover:border-violet-500
            transition
            "
          >
            <FaLinkedin />
          </a>

          <a
            href="/resume.pdf"
            className="
            flex-1
            rounded-2xl
            bg-gradient-to-r
            from-violet-600
            to-cyan-500
            py-4
            flex
            justify-center
            text-white
            font-semibold
            "
          >
            Resume
          </a>
        </div>
      </div>
    </motion.div>
  );
}
