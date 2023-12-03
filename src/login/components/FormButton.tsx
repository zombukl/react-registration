import React from 'react';
import styled from 'styled-components';

interface FormButtonProps {
  colored?: boolean;
  children: React.ReactNode;
}
const StyledButton = styled.button<{ $primary?: boolean }>`
  background-color: ${(props) => (props.$primary ? '#885043' : 'transparent')};
  color: ${(props) => (props.$primary ? 'white' : 'black')};
  font-size: 18px;
  border: ${(props) => (props.$primary ? '0px' : '1px solid #885043')};
  border-radius: 5px;
  cursor: pointer;
  padding: 10px;
  margin-bottom: 20px;
  width: 50%;
  align-self: center;
  @media (max-width: 768px) {
    width: 90%;
    margin-bottom: 10px;
  }
`;

const FormButton = (props: FormButtonProps) => {
  return <StyledButton $primary={props.colored}>{props.children}</StyledButton>;
};

export default FormButton;
