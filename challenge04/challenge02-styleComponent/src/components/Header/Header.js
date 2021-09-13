import { HeadingH1 } from "../Heading";
import * as S from "./Header.style";

const Header = () => {
  return (
    <>
      <S.HeaderStyled>
        <S.ImageStyle
          src="https://media-exp1.licdn.com/dms/image/C4E0BAQH52Ww03T5AYg/company-logo_200_200/0/1612288380396?e=2159024400&v=beta&t=tOfyT-zSequXt_yJfr5do_Jrl4cUk-gF4LaGzJ59cZ0"
          alt="Brainn"
        />
        <HeadingH1>Challenge1</HeadingH1>
      </S.HeaderStyled>
    </>
  );
};

export default Header;
