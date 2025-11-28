import { RiJavascriptFill } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { FaPhp } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { DiNginx } from "react-icons/di";

export default function SkillsGrid() {
  const styleIcon = "group-hover:scale-120 text-amber-500 text-4xl transition";
  const skills = [
    {
      icon: <FaPhp className={styleIcon} />,
      name: "PHP",
    },
    { icon: <RiJavascriptFill className={styleIcon} />, name: "JavaScript" },
    { icon: <FaLaravel className={styleIcon} />, name: "Laravel" },
    { icon: <FaReact className={styleIcon} />, name: "React.js" },
    { icon: <DiMysql className={styleIcon} />, name: "MySQL" },
    { icon: <FaDocker className={styleIcon} />, name: "Docker" },
    { icon: <DiNginx className={styleIcon} />, name: "Nginx" },
    { icon: <FaLinux className={styleIcon} />, name: "Linux" },
  ];
  return (
    <section className="mt-12 md:mt-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
        Mes Compétences
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-card bg-[#1f1f1f] p-6 rounded-lg border-2 border-gray-800 hover:border-amber-500 transition-colors group"
          >
            {skill.icon}
            <h3 className="text-lg font-bold">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
