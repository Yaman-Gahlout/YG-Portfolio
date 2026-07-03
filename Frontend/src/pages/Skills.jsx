import SkillsHeader from "../components/SkillsHeader";
import SkillSection from "../components/SkillSection";

import { FaHtml5, FaReact, FaJava } from "react-icons/fa";

import {
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoGithub,
  IoLogoNodejs,
} from "react-icons/io5";

import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiMysql, SiPostman } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

import { HiCode, HiCube, HiDatabase, HiCog } from "react-icons/hi";

export default function Skills() {
  const languages = [
    {
      title: "Java",
      icon: FaJava,
      color: "from-orange-500 to-red-500",
      level: 90,
    },
    {
      title: "HTML5",
      icon: FaHtml5,
      color: "from-orange-500 to-orange-600",
      level: 95,
    },
    {
      title: "CSS3",
      icon: IoLogoCss3,
      color: "from-blue-500 to-cyan-500",
      level: 90,
    },
    {
      title: "JavaScript",
      icon: IoLogoJavascript,
      color: "from-yellow-400 to-orange-400",
      level: 90,
    },
  ];

  const frameworks = [
    {
      title: "React.js",
      icon: FaReact,
      color: "from-cyan-400 to-blue-500",
      level: 90,
    },
    {
      title: "Tailwind CSS",
      icon: RiTailwindCssFill,
      color: "from-cyan-500 to-sky-500",
      level: 95,
    },
    {
      title: "Node.js",
      icon: IoLogoNodejs,
      color: "from-green-500 to-emerald-500",
      level: 85,
    },
    {
      title: "Express.js",
      icon: SiExpress,
      color: "from-gray-500 to-gray-700",
      level: 85,
    },
  ];

  const databases = [
    {
      title: "MongoDB",
      icon: SiMongodb,
      color: "from-green-500 to-lime-500",
      level: 90,
    },
    {
      title: "MySQL",
      icon: SiMysql,
      color: "from-blue-500 to-indigo-500",
      level: 80,
    },
  ];

  const tools = [
    {
      title: "GitHub",
      icon: IoLogoGithub,
      color: "from-gray-600 to-gray-800",
      level: 90,
    },
    {
      title: "VS Code",
      icon: VscVscode,
      color: "from-blue-500 to-cyan-500",
      level: 95,
    },
    {
      title: "Postman",
      icon: SiPostman,
      color: "from-orange-500 to-red-500",
      level: 85,
    },
  ];

  return (
    <section className="relative bg-[#050816] overflow-hidden py-24">
      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-violet-600/10 rounded-full blur-[120px]" />

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <SkillsHeader />

        <SkillSection
          title="Programming Languages"
          subtitle="Languages I use to build applications."
          icon={HiCode}
          skills={languages}
        />

        <SkillSection
          title="Frameworks & Libraries"
          subtitle="Modern frontend and backend technologies."
          icon={HiCube}
          skills={frameworks}
        />

        <SkillSection
          title="Databases"
          subtitle="Databases I work with."
          icon={HiDatabase}
          skills={databases}
        />

        <SkillSection
          title="Tools & Platforms"
          subtitle="Development tools I use every day."
          icon={HiCog}
          skills={tools}
        />
      </div>
    </section>
  );
}
