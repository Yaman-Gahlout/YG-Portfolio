import { motion } from "framer-motion";

import AboutHeader from "../components/AboutHeader";
import ProfileCard from "../components/ProfileCard";
import BioCard from "../components/BioCard";
import EducationTimeline from "../components/EducationTimeline";
import QuickInfo from "../components/QuickInfo";

export default function About() {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-20">
      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-violet-600/10 rounded-full blur-[120px]" />

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px]" />
      </div>

      {/* Main Container */}

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}

        <AboutHeader />

        {/* Top Section */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
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
          >
            <ProfileCard />
          </motion.div>

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
              duration: 0.7,
              delay: 0.2,
            }}
          >
            <BioCard />
          </motion.div>
        </div>

        {/* Education */}

        <EducationTimeline />

        {/* Quick Overview */}

        <QuickInfo />
      </div>
    </section>
  );
}
