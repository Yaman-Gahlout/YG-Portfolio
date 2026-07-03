import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

export default function SkillSection({
  title,
  subtitle,
  icon: SectionIcon,
  skills,
}) {
  return (
    <section className="mb-20">
      {/* Section Header */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <div className="flex items-center gap-4">
          <div
            className="
              w-14
              h-14
              rounded-2xl
              bg-gradient-to-r
              from-violet-600
              to-cyan-500
              flex
              items-center
              justify-center
              shadow-lg
            "
          >
            <SectionIcon className="text-white text-2xl" />
          </div>

          <div>
            <h2
              className="
                text-2xl
                sm:text-3xl
                font-bold
                text-white
              "
            >
              {title}
            </h2>

            <p className="text-slate-400 mt-1">{subtitle}</p>
          </div>
        </div>

        {/* Gradient Line */}

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 120 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.2,
            duration: 0.7,
          }}
          className="
            h-1
            mt-5
            rounded-full
            bg-gradient-to-r
            from-violet-500
            via-fuchsia-500
            to-cyan-400
          "
        />
      </motion.div>

      {/* Skills Grid */}

      <div
        className="
          grid
          grid-cols-2
          md:grid-cols-3
          xl:grid-cols-4
          gap-6
        "
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
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
              delay: index * 0.08,
              duration: 0.4,
            }}
          >
            <SkillCard
              title={skill.title}
              icon={skill.icon}
              color={skill.color}
              level={skill.level}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
