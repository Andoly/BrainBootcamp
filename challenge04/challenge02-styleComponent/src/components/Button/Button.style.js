import styled, { css } from "styled-components";

export const ButtonStyled = styled.button`
  height: 40px;
  width: 142px;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  margin: 5px;

  ${({ kind }) =>
    kind === "primary"
      ? css`
          background: var(--primary);
          border: 1px solid var(--primary);
          &:hover {
            transform: scale(1.02, 1.02);
          }
        `
      : css`
          background: var(--secondary);
          border: 1px solid var(--secondary);
          &:hover {
            transform: scale(1.02, 1.02);
          }
        `}
`;
