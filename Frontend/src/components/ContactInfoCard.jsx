import { motion } from "framer-motion";

import { MdEmail, MdOutlineLocationOn } from "react-icons/md";

import { LuPhone } from "react-icons/lu";

import { FaGithub, FaLinkedin } from "react-icons/fa6";

const contactInfo = [
  {
    icon: MdEmail,
    title: "Email",
    value: "yamangahlout123@gmail.com",
    href: "mailto:yamangahlout123@gmail.com",
    color: "from-pink-500 to-violet-500",
  },

  {
    icon: LuPhone,
    title: "Phone",
    value: "+91 9548905852",
    href: "tel:+919548905852",
    color: "from-cyan-500 to-blue-500",
  },

  {
    icon: MdOutlineLocationOn,
    title: "Location",
    value: "Noida, Uttar Pradesh, India",
    href: "#",
    color: "from-green-500 to-emerald-500",
  },
];

const socials = [
  {
    icon: FaGithub,
    href: "https://github.com/Yaman-Gahlout",
  },

  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/yaman-gahlout-751349260/",
  },

  {
    icon: MdEmail,
    href: "mailto:yamangahlout123@gmail.com",
  },
];

export default function ContactInfoCard() {
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
        duration: 0.6,
      }}
      className="
      relative
      overflow-hidden
      rounded-3xl
      bg-white/5
      backdrop-blur-2xl
      border
      border-white/10
      p-8
      "
    >
      {/* Glow */}

      <div
        className="
        absolute
        -top-24
        -right-24
        h-64
        w-64
        rounded-full
        bg-violet-500/20
        blur-[120px]
        "
      />

      <div className="relative z-10">
        {/* Heading */}

        <h2 className="text-3xl font-bold text-white">Contact Information</h2>

        <p className="mt-3 text-slate-400 leading-7">
          Feel free to reach out through any of the following channels. I'm
          always happy to discuss new opportunities and collaborations.
        </p>

        {/* Contact Cards */}

        <div className="mt-10 space-y-5">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.title}
                href={item.href}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.15,
                }}
                whileHover={{
                  x: 8,
                }}
                className="
                flex
                items-center
                gap-5
                rounded-2xl
                bg-white/5
                border
                border-white/10
                p-5
                transition
                hover:border-violet-500/30
                "
              >
                <div
                  className={`
                  h-14
                  w-14
                  rounded-2xl
                  bg-gradient-to-r
                  ${item.color}
                  flex
                  items-center
                  justify-center
                  text-white
                  text-2xl
                  `}
                >
                  <Icon />
                </div>

                <div>
                  <p className="text-sm text-slate-400">{item.title}</p>

                  <p className="text-white font-medium break-all">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Availability */}

        <div
          className="
          mt-10
          rounded-2xl
          bg-gradient-to-r
          from-violet-600
          to-cyan-500
          p-5
          text-white
          "
        >
          <p className="font-semibold text-lg">🚀 Currently Available</p>

          <p className="mt-2 opacity-90">
            Open for internships, freelance projects, and full-time
            opportunities.
          </p>
        </div>

        {/* Social */}

        <div className="mt-10">
          <p className="text-white font-semibold mb-5">Connect with me</p>

          <div className="flex gap-5">
            {socials.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{
                    y: -6,
                    scale: 1.08,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="
                  h-14
                  w-14
                  rounded-full
                  bg-white/5
                  border
                  border-white/10
                  backdrop-blur-xl
                  flex
                  items-center
                  justify-center
                  text-white
                  text-2xl
                  hover:border-violet-500
                  hover:bg-violet-500/10
                  transition-all
                  duration-300
                  "
                >
                  <Icon />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
