import { motion } from "framer-motion";

export default function BackgroundEffects() {
  return (
    <>
      {/* Main Gradient Blob */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-20 -left-20 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-violet-600/20 blur-[120px]"
      />

      {/* Cyan Blob */}
      <motion.div
        animate={{
          scale: [1.1, 0.9, 1.1],
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-0 w-80 h-80 sm:w-[28rem] sm:h-[28rem] rounded-full bg-cyan-500/20 blur-[140px]"
      />

      {/* Pink Blob */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-fuchsia-500/10 blur-[100px] -translate-x-1/2 -translate-y-1/2"
      />

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Floating Decorative Dots */}
      {[
        {
          top: "15%",
          left: "12%",
          color: "bg-violet-500",
          delay: 0,
        },
        {
          top: "35%",
          right: "10%",
          color: "bg-cyan-400",
          delay: 1,
        },
        {
          bottom: "20%",
          left: "20%",
          color: "bg-pink-500",
          delay: 2,
        },
        {
          bottom: "10%",
          right: "15%",
          color: "bg-indigo-400",
          delay: 3,
        },
      ].map((dot, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -15, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 3,
            delay: dot.delay,
            repeat: Infinity,
          }}
          className={`absolute w-3 h-3 rounded-full ${dot.color}`}
          style={{
            top: dot.top,
            bottom: dot.bottom,
            left: dot.left,
            right: dot.right,
          }}
        />
      ))}

      {/* Rotating Rings - Desktop Only */}
      {/* <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear",
        }}
        className="hidden lg:block absolute top-1/2 left-1/2 w-[650px] h-[650px] border border-violet-500/10 rounded-full -translate-x-1/2 -translate-y-1/2"
      /> */}

      {/* <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 70,
          repeat: Infinity,
          ease: "linear",
        }}
        className="hidden lg:block absolute top-1/2 left-1/2 w-[850px] h-[850px] border border-cyan-500/10 rounded-full -translate-x-1/2 -translate-y-1/2"
      /> */}

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#050816] to-transparent" />
    </>
  );
}
