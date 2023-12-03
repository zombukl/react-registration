import React from 'react';
import styled from 'styled-components';

interface LoginFormWrapperProps {
  children: React.ReactNode;
}

const StyledLoginForm = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.5);
  width: 60%;
  display: flex;
  padding: 0px;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const LoginFormWrapper = ({ children }: LoginFormWrapperProps) => {
  return <StyledLoginForm>{children}</StyledLoginForm>;
};

export default LoginFormWrapper;
