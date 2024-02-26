import React from 'react';
import styled from 'styled-components';

interface LoginPageWrapperProps {
  children: React.ReactNode;
}

const LoginPageWrapper = ({ children }: LoginPageWrapperProps) => {
  const LoginPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
  `;
  return <LoginPageWrapper>{children}</LoginPageWrapper>;
};

export default LoginPageWrapper;
