import React from 'react';
import styled from 'styled-components';

interface LabelProps {
  children: React.ReactNode;
}

const StyledLabel = styled.label`
  font-size: 16px;
  margin-bottom: 20px;
  margin-left: 5px;
  color: #616161;
  @media (max-width: 768px) {
    margin-bottom: 15 px;
  }
`;

const Label = ({ children }: LabelProps) => {
  return <StyledLabel>{children}</StyledLabel>;
};

export default Label;
