import styled from "styled-components";

export const TableCell = styled.td`
  text-align: center;
  width: 220px;
  max-height: 220px;
  border-radius: 5px;
  padding: 10px;
  border: 1px solid var(--gray);
`;

export const TableImage = styled.td`
  width: 220px;
  border-radius: 5px;
  border: 1px solid var(--gray);
`;

export const ButtonRemove = styled.button`
  width: 25px;
  height: 20px;
  cursor: pointer;
  border-radius: 5px;
  background: 1px solid var(--light);
  border: var(--red);
  color: var(--red);

  &:hover {
    transform: scale(1.2);
    transition: all 0.5s;
    border: 1px solid var(--light);
    color: var(--light);
    background: var(--red);
  }
`;
