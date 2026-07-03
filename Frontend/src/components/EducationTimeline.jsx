import { motion } from "framer-motion";
import { HiAcademicCap, HiCalendar, HiBadgeCheck } from "react-icons/hi";

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institute: "Jaypee Institute of Information Technology (JIIT), Noida",
    duration: "July 2025 – May 2027",
    cgpa: "9.38 CGPA",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institute: "Disha Institute of Science & Technology",
    duration: "July 2022 – June 2025",
    cgpa: "8.0 CGPA",
    color: "from-cyan-500 to-blue-500",
  },
];

export default function EducationTimeline() {
  return (
    <section className="mt-20">
      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Academic Journey
        </h2>

        <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
          My academic journey has strengthened my programming, problem-solving,
          and software development skills.
        </p>
      </motion.div>

      <div className="relative max-w-5xl mx-auto">
        {/* Timeline Line */}

        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[3px] -translate-x-1/2 bg-gradient-to-b from-violet-500 via-fuchsia-500 to-cyan-500 rounded-full"></div>

        {education.map((item, index) => (
          <motion.div
            key={item.degree}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -50 : 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
            }}
            className={`relative mb-14 flex ${
              index % 2 === 0 ? "md:justify-start" : "md:justify-end"
            }`}
          >
            {/* Timeline Dot */}

            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-violet-500 border-4 border-[#050816] shadow-lg shadow-violet-500/40 z-20"></div>

            {/* Card */}

            <motion.div
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="
                w-full
                md:w-[45%]
                rounded-3xl
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                p-7
                shadow-xl
              "
            >
              {/* Top */}

              <div className="flex items-center gap-4">
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
                  `}
                >
                  <HiAcademicCap className="text-white text-3xl" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    {item.degree}
                  </h3>

                  <p className="text-slate-400 mt-1">{item.institute}</p>
                </div>
              </div>

              {/* Divider */}

              <div className="my-6 h-px bg-white/10"></div>

              {/* Duration */}

              <div className="flex items-center gap-3 mb-4">
                <HiCalendar className="text-cyan-400 text-xl" />

                <span className="text-slate-300">{item.duration}</span>
              </div>

              {/* CGPA */}

              <div className="flex items-center gap-3">
                <HiBadgeCheck className="text-green-400 text-xl" />

                <span className="text-green-400 font-semibold">
                  {item.cgpa}
                </span>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
