// import { NavLink } from "react-router-dom";
// import { motion } from "framer-motion";
// import { TypeAnimation } from "react-type-animation";
// import {
//   FaGithub,
//   FaLinkedin,
//   FaReact,
//   FaNodeJs,
//   FaJava,
// } from "react-icons/fa";
// import { SiMongodb, SiJavascript, SiTailwindcss } from "react-icons/si";
// import { MdEmail, MdOutlineFileDownload } from "react-icons/md";

// import heroImage from "../assets/hero2.svg";

// export default function Home() {
//   const fadeUp = {
//     hidden: {
//       opacity: 0,
//       y: 40,
//     },
//     visible: (delay = 0) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay,
//         duration: 0.8,
//         ease: "easeOut",
//       },
//     }),
//   };

//   const floating = {
//     animate: {
//       y: [0, -20, 0],
//       transition: {
//         duration: 4,
//         repeat: Infinity,
//         ease: "easeInOut",
//       },
//     },
//   };

//   return (
//     <section className="relative overflow-hidden min-h-screen flex items-center justify-center bg-[#050816] px-6 lg:px-12 pb-10">
//       {/* ===========================
//             Background Glow Effects
//       ============================ */}

//       <div className="absolute top-20 left-0 w-80 h-80 bg-violet-600/20 rounded-full blur-[140px]" />

//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-[150px]" />

//       <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-fuchsia-500/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />

//       {/* Grid Background */}

//       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

//       {/* Main Container */}

//       <div className="relative z-10 max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">
//         <div className="flex flex-col justify-center">
//           {/* Available Badge */}

//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//             custom={0}
//             className="mb-6"
//           >
//             <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-violet-500/20">
//               <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>

//               <span className="text-green-400 font-medium">
//                 Available for Internship
//               </span>
//             </div>
//           </motion.div>

//           {/* Greeting */}

//           <motion.p
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//             custom={0.2}
//             className="text-xl text-violet-400 font-semibold"
//           >
//             👋 Hello, I'm
//           </motion.p>

//           {/* Name */}

//           <motion.h1
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//             custom={0.4}
//             className="mt-3 text-5xl md:text-7xl font-black leading-tight"
//           >
//             <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
//               Yaman
//             </span>

//             <br />

//             <span className="text-white">Gahlout</span>
//           </motion.h1>

//           {/* Typewriter */}

//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//             custom={0.6}
//             className="mt-6 text-2xl md:text-3xl font-semibold text-cyan-300 h-14"
//           >
//             <TypeAnimation
//               sequence={[
//                 "Frontend Developer",
//                 2000,
//                 "MERN Stack Developer",
//                 2000,
//                 "React Developer",
//                 2000,
//                 "Java Programmer",
//                 2000,
//                 "Problem Solver",
//                 2000,
//               ]}
//               wrapper="span"
//               speed={50}
//               repeat={Infinity}
//             />
//           </motion.div>

//           {/* Description */}

//           <motion.p
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//             custom={0.8}
//             className="mt-6 text-lg leading-8 text-slate-300 max-w-xl"
//           >
//             Passionate about creating modern, scalable, and responsive web
//             applications with exceptional user experiences. I enjoy turning
//             complex ideas into elegant digital solutions using the MERN stack,
//             Java, and modern frontend technologies.
//           </motion.p>

//           {/* Buttons */}

//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//             custom={1}
//             className="flex flex-wrap gap-5 mt-10"
//           >
//             <NavLink to="/contact">
//               <motion.button
//                 whileHover={{
//                   scale: 1.05,
//                   y: -3,
//                 }}
//                 whileTap={{
//                   scale: 0.95,
//                 }}
//                 className="px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 shadow-lg shadow-violet-600/30"
//               >
//                 Hire Me
//               </motion.button>
//             </NavLink>

//             <NavLink to="/projects">
//               <motion.button
//                 whileHover={{
//                   scale: 1.05,
//                   y: -3,
//                 }}
//                 whileTap={{
//                   scale: 0.95,
//                 }}
//                 className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl text-white hover:border-violet-500 transition"
//               >
//                 View Projects
//               </motion.button>
//             </NavLink>

//             <motion.a
//               href="/resume.pdf"
//               whileHover={{
//                 scale: 1.05,
//               }}
//               whileTap={{
//                 scale: 0.95,
//               }}
//               className="px-8 py-4 rounded-xl flex items-center gap-2 border border-cyan-400 text-cyan-300 hover:bg-cyan-500 hover:text-white transition"
//             >
//               <MdOutlineFileDownload size={22} />
//               Resume
//             </motion.a>
//           </motion.div>

//           {/* Social Icons */}

//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//             custom={1.2}
//             className="flex gap-5 mt-12"
//           >
//             {[
//               {
//                 icon: <FaGithub />,
//                 link: "https://github.com/Yaman-Gahlout",
//               },
//               {
//                 icon: <FaLinkedin />,
//                 link: "https://www.linkedin.com/in/yaman-gahlout-751349260/",
//               },
//               {
//                 icon: <MdEmail />,
//                 link: "mailto:yamangahlout123@gmail.com",
//               },
//             ].map((item, index) => (
//               <motion.a
//                 key={index}
//                 href={item.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 whileHover={{
//                   y: -6,
//                   scale: 1.15,
//                   rotate: 8,
//                 }}
//                 whileTap={{
//                   scale: 0.9,
//                 }}
//                 className="w-14 h-14 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-2xl text-white hover:bg-violet-600 transition"
//               >
//                 {item.icon}
//               </motion.a>
//             ))}
//           </motion.div>
//         </div>

//         <div className="relative flex justify-center items-center">
//           {/* Animated Glow Behind Image */}

//           <motion.div
//             animate={{
//               scale: [1, 1.15, 1],
//               opacity: [0.4, 0.7, 0.4],
//             }}
//             transition={{
//               duration: 5,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//             className="absolute w-[420px] h-[420px] rounded-full bg-gradient-to-r from-violet-600/30 via-fuchsia-500/20 to-cyan-500/30 blur-[120px]"
//           />

//           {/* Hero Image */}

//           <motion.img
//             src={heroImage}
//             alt="Hero"
//             variants={floating}
//             animate="animate"
//             whileHover={{
//               scale: 1.03,
//               rotate: 1,
//             }}
//             className="relative z-20 w-full max-w-[520px] drop-shadow-[0_25px_60px_rgba(124,58,237,0.45)]"
//           />

//           {/* Floating Tech Icons */}

//           {[
//             {
//               icon: <FaReact />,
//               className: "top-5 left-5 text-cyan-400",
//               delay: 0,
//             },
//             {
//               icon: <FaNodeJs />,
//               className: "top-20 right-4 text-green-500",
//               delay: 0.5,
//             },
//             {
//               icon: <SiMongodb />,
//               className: "bottom-20 left-6 text-green-400",
//               delay: 1,
//             },
//             {
//               icon: <SiJavascript />,
//               className: "bottom-8 right-10 text-yellow-400",
//               delay: 1.5,
//             },
//             {
//               icon: <FaJava />,
//               className: "top-1/2 -left-10 text-orange-500",
//               delay: 2,
//             },
//             {
//               icon: <SiTailwindcss />,
//               className: "top-1/2 -right-10 text-sky-400",
//               delay: 2.5,
//             },
//           ].map((item, index) => (
//             <motion.div
//               key={index}
//               animate={{
//                 y: [0, -18, 0],
//               }}
//               transition={{
//                 duration: 3,
//                 delay: item.delay,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               whileHover={{
//                 scale: 1.25,
//                 rotate: 15,
//               }}
//               className={`absolute ${item.className} z-30 w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center text-3xl shadow-xl`}
//             >
//               {item.icon}
//             </motion.div>
//           ))}

//           {/* Experience Card */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               x: 60,
//             }}
//             animate={{
//               opacity: 1,
//               x: 0,
//             }}
//             transition={{
//               delay: 1.2,
//               duration: 0.7,
//             }}
//             whileHover={{
//               y: -6,
//               scale: 1.03,
//             }}
//             className="absolute -top-22 left-12 z-30 px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-2xl"
//           >
//             <h2 className="text-3xl font-bold text-violet-400">2+</h2>

//             <p className="text-slate-300 text-sm mt-1">Major Projects</p>
//           </motion.div>

//           {/* Tech Stack Card */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               x: -60,
//             }}
//             animate={{
//               opacity: 1,
//               x: 0,
//             }}
//             transition={{
//               delay: 1.5,
//               duration: 0.7,
//             }}
//             whileHover={{
//               y: -6,
//               scale: 1.03,
//             }}
//             className="absolute -bottom-20 right-15 z-30 px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-2xl"
//           >
//             <p className="text-sm text-slate-400 mb-2">Tech Stack</p>

//             <div className="flex gap-3 text-2xl">
//               <FaReact className="text-cyan-400" />
//               <FaNodeJs className="text-green-500" />
//               <SiMongodb className="text-green-400" />
//               <SiJavascript className="text-yellow-400" />
//             </div>
//           </motion.div>

//           {/* Circular Rings */}

//           <motion.div
//             animate={{
//               rotate: 360,
//             }}
//             transition={{
//               duration: 40,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//             className="absolute w-[520px] h-[520px] border border-violet-500/10 rounded-full"
//           />

//           <motion.div
//             animate={{
//               rotate: -360,
//             }}
//             transition={{
//               duration: 55,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//             className="absolute w-[620px] h-[620px] border border-cyan-500/10 rounded-full"
//           />
//         </div>
//       </div>

//       {/* Floating Decorative Dots */}

//       <motion.div
//         animate={{
//           y: [0, -20, 0],
//         }}
//         transition={{
//           duration: 4,
//           repeat: Infinity,
//         }}
//         className="absolute top-32 right-20 w-3 h-3 rounded-full bg-violet-500"
//       />

//       <motion.div
//         animate={{
//           y: [0, 18, 0],
//         }}
//         transition={{
//           duration: 5,
//           repeat: Infinity,
//         }}
//         className="absolute bottom-40 left-20 w-4 h-4 rounded-full bg-cyan-400"
//       />

//       <motion.div
//         animate={{
//           scale: [1, 1.5, 1],
//         }}
//         transition={{
//           duration: 3,
//           repeat: Infinity,
//         }}
//         className="absolute top-1/2 left-12 w-2 h-2 rounded-full bg-fuchsia-500"
//       />
//     </section>
//   );
// }

import Hero from "../components/Hero";

export default function Home() {
  return <Hero />;
}
