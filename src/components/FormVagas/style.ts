import styled from "styled-components";

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--color-secondary);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const Input = styled.input`
  padding: 0 16px;
  outline-color: var(--color-main);
`;

export const BtnForm = styled.button`
  background-color: var(--color-main);
  border: 1px solid var(--color-main);
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: var(--color-secondary);
  margin-left: 8px;
  cursor: pointer;
`;
