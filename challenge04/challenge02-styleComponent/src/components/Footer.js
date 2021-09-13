import { HeadingH2 } from "./Heading";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <HeadingH2>Follow us</HeadingH2>
      <div className="footer">
        <a
          href="https://www.linkedin.com/in/andoly/"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Andoly"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
