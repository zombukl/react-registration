import React from 'react';
import styled from 'styled-components';

interface LoginPageWrapperProps {
  children: React.ReactNode;
}

const StyledLoginPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const LoginPageWrapper = ({ children }: LoginPageWrapperProps) => {
  return <StyledLoginPage>{children}</StyledLoginPage>;
};

export default LoginPageWrapper;
