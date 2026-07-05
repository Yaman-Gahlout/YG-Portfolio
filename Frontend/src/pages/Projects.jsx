import ProjectsHeader from "../components/ProjectsHeader";
import ProjectCard from "../components/ProjectCard";

/* Images */

import SocialNovaImage from "../assets/Projects-image/socialnovaImage.png";
import ExamNotesImage from "../assets/Projects-image/ExamNotesAIImage.png";

import ShoppingImage from "../assets/Projects-image/shopping-management-system.png";
import TodoImage from "../assets/Projects-image/Todo-App.png";
import WeatherImage from "../assets/Projects-image/weatherApp.png";
import CalculatorImage from "../assets/Projects-image/calculator.png";
import PasswordImage from "../assets/Projects-image/passwordGenerator.png";
import OTPImage from "../assets/Projects-image/otpGenerator.png";
import MyntraImage from "../assets/Projects-image/Myntra Clone.png";
import RazorpayImage from "../assets/Projects-image/RazorpayClone.png";

export default function Projects() {
  const projects = [
    {
      featured: true,

      name: "SocialNova",

      image: SocialNovaImage,

      description:
        "Modern social media platform built using the MERN Stack with authentication, posts, real-time messaging and responsive design.",

      features: [
        "JWT Authentication",
        "Realtime Chat",
        "Cloudinary Upload",
        "Responsive UI",
        "Notifications",
        "Like & Comments",
      ],

      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.IO",
        "Tailwind CSS",
      ],

      github: "https://github.com/Yaman-Gahlout/SocialNova",

      live: "https://socialnova-6uat.onrender.com/",
    },

    {
      featured: true,

      name: "ExamNotes AI",

      image: ExamNotesImage,

      description:
        "AI powered learning platform for generating notes and summaries from PDF documents.",

      features: [
        "AI Notes",
        "PDF Upload",
        "Authentication",
        "Responsive Design",
        "MERN Stack",
        "Tailwind CSS",
      ],

      technologies: ["React", "Node.js", "MongoDB", "Express.js"],

      github: "https://github.com/Yaman-Gahlout/ExamNotes.Ai",

      live: "https://examnotes-ai-ytdj.onrender.com",
    },

    // {
    //   featured: true,

    //   name: "Tourist Management System",

    //   image: TouristImage,

    //   description:
    //     "Desktop application built in Java using Object Oriented Programming concepts and file handling.",

    //   features: [
    //     "Java OOP",
    //     "File Handling",
    //     "Booking System",
    //     "Customer Records",
    //   ],

    //   technologies: ["Java"],

    //   github: "",

    //   live: "",
    // },

    /* ---------- Small Projects ---------- */

    {
      name: "Shopping Management System",
      image: ShoppingImage,
      description: "Responsive shopping platform.",
      technologies: ["React", "Tailwind CSS"],
      features: ["Shopping Cart", "Responsive", "Modern UI"],
      //github: "https://github.com/Yaman-Gahlout/Shopping-Management-System",
    },

    {
      name: "Todo App",
      image: TodoImage,
      description: "Task management application.",
      technologies: ["React", "Tailwind CSS"],
      features: ["CRUD", "Responsive", "Local Storage"],
    },

    {
      name: "Weather App",
      image: WeatherImage,
      description: "Real-time weather application.",
      technologies: ["HTML", "CSS", "JavaScript"],
      features: ["Weather API", "Responsive"],
    },

    {
      name: "Calculator",
      image: CalculatorImage,
      description: "Modern Calculator.",
      technologies: ["React"],
      features: ["Arithmetic", "Responsive"],
    },

    {
      name: "Password Generator",
      image: PasswordImage,
      description: "Generate secure passwords.",
      technologies: ["HTML", "CSS", "JavaScript"],
      features: ["Random Password", "Custom Length"],
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);

  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section className="relative py-24 overflow-hidden bg-[#050816]">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute -top-40 left-0 h-80 w-80 rounded-full bg-violet-600/10 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <ProjectsHeader />

        {/* Featured */}

        <section>
          <h2 className="text-4xl font-bold text-white mb-12">
            ⭐ Featured Projects
          </h2>

          <div className="space-y-12">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </section>

        {/* Other */}

        <section className="mt-24">
          <h2 className="text-4xl font-bold text-white mb-12">
            📂 Other Projects
          </h2>

          <div
            className="
            grid
            sm:grid-cols-2
            xl:grid-cols-3
            gap-8
            "
          >
            {otherProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
