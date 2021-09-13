import { HeadingH2, HeadingH4 } from "../Heading";
import * as S from "./Content.style";

const Content = ({ title, content }) => {
  return (
    <S.ArticleStyled>
      <S.SectionStyled>
        <HeadingH2>{title}</HeadingH2>
        <HeadingH4>{content}</HeadingH4>
      </S.SectionStyled>
    </S.ArticleStyled>
  );
};

export default Content;
