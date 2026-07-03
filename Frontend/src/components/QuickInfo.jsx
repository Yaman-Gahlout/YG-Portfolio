import { motion } from "framer-motion";
import {
  HiOutlineCode,
  HiOutlineCollection,
  HiOutlineChip,
  HiOutlineAcademicCap,
  HiOutlineLightningBolt,
  HiOutlineGlobe,
} from "react-icons/hi";

const quickInfo = [
  {
    title: "Projects",
    value: "3+",
    icon: HiOutlineCollection,
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Technologies",
    value: "10+",
    icon: HiOutlineChip,
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "DSA Problems",
    value: "300+",
    icon: HiOutlineCode,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Current CGPA",
    value: "9.38",
    icon: HiOutlineAcademicCap,
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Learning",
    value: "Full Stack",
    icon: HiOutlineLightningBolt,
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Goal",
    value: "SDE",
    icon: HiOutlineGlobe,
    color: "from-indigo-500 to-violet-500",
  },
];

export default function QuickInfo() {
  return (
    <section className="mt-20">
      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Quick Overview
        </h2>

        <p className="text-slate-400 mt-3">
          A quick snapshot of my journey and technical profile.
        </p>
      </motion.div>

      {/* Cards */}

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
        {quickInfo.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.12,
                duration: 0.5,
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="
                relative
                overflow-hidden
                rounded-3xl
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                p-6
                shadow-xl
              "
            >
              {/* Glow */}

              <div
                className={`
                  absolute
                  -top-10
                  -right-10
                  w-28
                  h-28
                  rounded-full
                  bg-gradient-to-r
                  ${item.color}
                  opacity-20
                  blur-3xl
                `}
              />

              {/* Icon */}

              <div
                className={`
                  w-14
                  h-14
                  rounded-2xl
                  bg-gradient-to-r
                  ${item.color}
                  flex
                  items-center
                  justify-center
                  text-white
                  text-3xl
                  shadow-lg
                `}
              >
                <Icon />
              </div>

              {/* Value */}

              <h3 className="mt-6 text-3xl font-bold text-white">
                {item.value}
              </h3>

              {/* Title */}

              <p className="mt-2 text-slate-400">{item.title}</p>

              {/* Bottom Line */}

              <motion.div
                whileHover={{
                  width: "100%",
                }}
                className={`
                  mt-6
                  h-1
                  rounded-full
                  w-16
                  bg-gradient-to-r
                  ${item.color}
                `}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
