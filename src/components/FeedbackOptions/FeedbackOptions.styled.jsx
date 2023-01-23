import styled from '@emotion/styled';

export const Description = styled.p`
  display: inline-block;
  margin: auto;
  padding: 0 5px;
`;

export const Btn = styled.button`
  padding: 10px;
  width: 95px;
  border-radius: 15px;
  background-color: #fff;
  color: #000;
  cursor: pointer;
  font-size: 24px;
  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    background-color: blue;
    color: yellow;
  }
`;
