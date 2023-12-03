import React from 'react';
import styled from 'styled-components';

interface CheckBoxWrapperProps {
  children: React.ReactNode;
}

const StyledCheckBox = styled.div`
  display: flex;
  align-items: center;
`;

const CheckBoxWrapper = ({ children }: CheckBoxWrapperProps) => {
  return <StyledCheckBox>{children}</StyledCheckBox>;
};

export default CheckBoxWrapper;
