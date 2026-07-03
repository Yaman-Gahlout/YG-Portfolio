import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <div className="flex  flex-col items-center justify-center gap-[10px] mt-[150px]">
      <div>
        <div className="mt-[30px] flex gap-[20px] max-xl:justify-center text-2xl text-white">
          <a
            href="https://github.com/Yaman-Gahlout"
            className="hover:text-[rgb(145,75,241)] transition duration-150 ease-in"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/yaman-gahlout-751349260/"
            className="hover:text-[rgb(145,75,241)] transition duration-150 ease-in"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:yamangahlout123@gmail.com"
            className="hover:text-[rgb(145,75,241)] transition duration-150 ease-in"
          >
            <MdEmail />
          </a>
        </div>
      </div>
      <div className="text-xl text-white text-center opacity-75">
        © Copyright 2025 Yaman Gahlout. All rights reserved.
      </div>
    </div>
  );
}
