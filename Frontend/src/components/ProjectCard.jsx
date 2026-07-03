import { motion } from "framer-motion";
import { useState } from "react";

import BrowserMockup from "./BrowserMockup";
import FeatureItem from "./FeatureItem";
import TechBadge from "./TechBadge";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ project }) {
  const {
    name,
    image,
    technologies,
    features,
    github,
    live,
    featured,
    description,
  } = project;

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.article
      onMouseMove={handleMove}
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
      }}
      transition={{
        duration: 0.5,
      }}
      className="
      group
      relative
      overflow-hidden
      rounded-[32px]
      bg-[#0F172A]/70
      backdrop-blur-2xl
      border
      border-white/10
      shadow-2xl
      "
    >
      {/* Mouse Spotlight */}

      <motion.div
        animate={{
          left: position.x - 180,
          top: position.y - 180,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 150,
        }}
        className="
        absolute
        w-[360px]
        h-[360px]
        rounded-full
        bg-violet-500/20
        blur-[120px]
        pointer-events-none
        opacity-0
        group-hover:opacity-100
        transition
        duration-500
        "
      />

      {/* Animated Border */}

      <div
        className="
        absolute
        inset-0
        rounded-[32px]
        p-[1px]
        bg-gradient-to-r
        from-violet-500/30
        via-cyan-500/30
        to-fuchsia-500/30
        opacity-0
        group-hover:opacity-100
        transition
        duration-700
        "
      >
        <div className="h-full w-full rounded-[32px] bg-[#050816]" />
      </div>

      {/* Content */}

      <div className="relative z-10 p-6 lg:p-8">
        {/* Featured Badge */}

        {featured && (
          <motion.div
            initial={{
              opacity: 0,
              y: -10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            className="
            inline-flex
            items-center
            gap-2
            px-4
            py-2
            rounded-full
            bg-gradient-to-r
            from-yellow-400
            to-orange-500
            text-black
            font-semibold
            text-sm
            mb-6
            shadow-xl
            "
          >
            ⭐ Featured Project
          </motion.div>
        )}

        {/* Browser */}

        <BrowserMockup image={image} title={name} />

        {/* Floating Tech Stack */}

        <div
          className="
          flex
          flex-wrap
          gap-3
          mt-6
          "
        >
          {technologies.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </div>

        {/* ---------- CONTENT CONTINUES IN PART 3B ---------- */}
        {/* Project Name */}

        <div className="mt-8">
          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            className="
              text-3xl
              lg:text-4xl
              font-black
              text-white
              tracking-tight
            "
          >
            {name}
          </motion.h2>

          {/* Small Divider */}

          <motion.div
            initial={{
              width: 0,
            }}
            whileInView={{
              width: 90,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
              mt-4
              h-1
              rounded-full
              bg-gradient-to-r
              from-violet-500
              via-fuchsia-500
              to-cyan-500
            "
          />
        </div>

        {/* Short Description */}

        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.15,
          }}
          className="
            mt-6
            text-slate-400
            leading-8
            text-base
            lg:text-lg
            max-w-3xl
          "
        >
          {description}
        </motion.p>

        {/* Quick Highlights */}

        <div
          className="
            mt-8
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-6
          "
        >
          <div className="flex items-center gap-3 mb-5">
            <div
              className="
                h-11
                w-11
                rounded-xl
                bg-gradient-to-r
                from-violet-600
                to-cyan-500
                flex
                items-center
                justify-center
                text-white
                font-bold
              "
            >
              ✓
            </div>

            <div>
              <h3 className="text-white font-semibold text-lg">Key Features</h3>

              <p className="text-slate-400 text-sm">
                Major functionalities included in this project
              </p>
            </div>
          </div>

          {/* Feature Grid */}

          <div
            className="
              grid
              md:grid-cols-2
              gap-4
            "
          >
            {features?.map((feature, index) => (
              <FeatureItem key={feature} text={feature} index={index} />
            ))}
          </div>
        </div>

        {/* Tech Footer */}

        {/* -------- FOOTER STARTS IN PART 3C -------- */}
        {/* Action Buttons */}

        {(github || live) && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
            className="
              mt-10
              flex
              flex-col
              sm:flex-row
              gap-4
            "
          >
            {/* GitHub Button */}

            {github && (
              <motion.a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.03,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="
                  group/button
                  flex-1
                  flex
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  px-6
                  py-4
                  text-white
                  transition-all
                  duration-300
                  hover:border-violet-500/40
                  hover:bg-violet-500/10
                "
              >
                <FaGithub className="text-xl transition-transform duration-300 group-hover/button:rotate-12" />

                <span className="font-semibold">Source Code</span>
              </motion.a>
            )}

            {/* Live Demo Button */}

            {live && (
              <motion.a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.03,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="
                  group/button
                  flex-1
                  flex
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  bg-gradient-to-r
                  from-violet-600
                  via-fuchsia-500
                  to-cyan-500
                  px-6
                  py-4
                  font-semibold
                  text-white
                  shadow-xl
                  shadow-violet-500/20
                  transition-all
                  duration-300
                "
              >
                <FaExternalLinkAlt className="transition-transform duration-300 group-hover/button:translate-x-1" />

                <span>Live Preview</span>
              </motion.a>
            )}
          </motion.div>
        )}

        {/* Bottom Decorative Line */}

        <motion.div
          initial={{
            width: 0,
          }}
          whileInView={{
            width: "100%",
          }}
          transition={{
            duration: 1,
            delay: 0.4,
          }}
          className="
            mt-10
            h-px
            bg-gradient-to-r
            from-transparent
            via-violet-500/30
            to-transparent
          "
        />
      </div>
    </motion.article>
  );
}
