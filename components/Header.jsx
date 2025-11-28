import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex flex-col items-center px-4 md:px-8 relative z-10 mt-6 md:mt-12">
      <h1 className="text-center mb-4 md:mb-5 text-2xl md:text-3xl lg:text-4xl font-bold">
        Alexis Pernette
      </h1>
      <ul className="flex gap-4 md:gap-6">
        <li>
          <a
            href="https://github.com/TryaNever"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl md:text-3xl hover:text-amber-500 transition-colors"
            aria-label="Github Personel"
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/alexis-pernette-b51727310"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl md:text-3xl hover:text-amber-500 transition-colors"
            aria-label="linkdin personelle"
          >
            <FaLinkedin />
          </a>
        </li>
      </ul>
    </header>
  );
}
