import { motion } from "framer-motion";

import BackgroundEffects from "./BackgroundEffects";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050816] pt-24 sm:pt-28 lg:pt-20">
      {/* Background */}
      <BackgroundEffects />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 min-h-[calc(100vh-80px)]">
          {/* Left Side */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="order-2 lg:order-1"
          >
            <HeroContent />
          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <HeroImage />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
