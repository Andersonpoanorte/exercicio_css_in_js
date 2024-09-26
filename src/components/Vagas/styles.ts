import styled from "styled-components";

export const ListaVaga = styled.li`
  border: 1px solid var(--color-main);
  background-color: var(--color-secondary);
  color: var(--color-main);
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  &:hover {
    background-color: var(--color-main);
    color: var(--color-secondary);
  }
`;

export const VagaTitulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`;

export const VagaLink = styled.a`
  border-color: var(--color-secondary);
  background-color: var(--color-main);
  color: var(--color-secondary);
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  &:hover {
    border-color: var(--color-main);
    background-color: var(--color-secondary);
    color: var(--color-main);
  }

  @media (max-width: 768px) {
    display: block;
  }
`;
