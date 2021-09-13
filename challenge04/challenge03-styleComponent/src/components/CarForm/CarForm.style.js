import styled from "styled-components";

export const Input = styled.input`
  background-color: var(--light);
  height: 36px;
  padding: 0 10px;
  border-radius: 8px;
  border: 1px solid var(--blue);
`;

export const Label = styled.label`
  font-weight: bold !important;
  font-weight: 500;
  margin: 10px;
`;

export const Form = styled.form`
  min-width: 600px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
`;

export const Between = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonSubmit = styled.button`
  background: var(--green);
  border: 1px solid var(--green);
  height: 40px;
  width: 142px;
  color: #fff;
`;
