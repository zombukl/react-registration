import React from 'react';
import styled from 'styled-components';

interface FormContentWrapperProps {
  children: React.ReactNode;
}

const FormContentWrapper = ({ children }: FormContentWrapperProps) => {
  const FormContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    padding: 20px;
    @media (max-width: 768px) {
      width: 100%;
    }
  `;
  return <FormContentWrapper>{children}</FormContentWrapper>;
};

export default FormContentWrapper;
