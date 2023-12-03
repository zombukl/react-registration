import React from 'react';
import styled from 'styled-components';

interface FormContentWrapperProps {
  children: React.ReactNode;
}

const StyledFormContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  padding: 20px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const FormContentWrapper = ({ children }: FormContentWrapperProps) => {
  return <StyledFormContent>{children}</StyledFormContent>;
};

export default FormContentWrapper;
