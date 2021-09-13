import styled from "styled-components";

const ContainerStyled = styled.div`
  max-width: 900px;
  margin: 30px auto;
`;

const Container = ({ children }) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};

export default Container;
