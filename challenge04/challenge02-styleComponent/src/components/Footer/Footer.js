import { HeadingH2 } from "../Heading";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import * as S from "./Footer.style";

const Footer = () => {
  return (
    <S.FooterStyled>
      <HeadingH2>Follow us</HeadingH2>
      <S.ContainerFooter>
        <S.AFooter
          href="https://www.linkedin.com/in/andoly/"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <FaLinkedin />
        </S.AFooter>
        <S.AFooter
          href="https://github.com/Andoly"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <FaGithub />
        </S.AFooter>
      </S.ContainerFooter>
    </S.FooterStyled>
  );
};

export default Footer;
