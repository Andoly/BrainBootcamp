import { HeadingH3 } from "../Heading";
import * as S from "./Menu.style";

const Menu = () => {
  return (
    <S.MenuStyled>
      <HeadingH3>Home</HeadingH3>
      <HeadingH3>Service</HeadingH3>
      <HeadingH3>About me</HeadingH3>
    </S.MenuStyled>
  );
};

export default Menu;
