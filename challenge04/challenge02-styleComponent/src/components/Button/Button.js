import * as S from "./Button.style";

const Button = ({ kind = "primary", children }) => {
  return <S.ButtonStyled kind={kind}>{children}</S.ButtonStyled>;
};

export default Button;
