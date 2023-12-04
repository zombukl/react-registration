import React from 'react';
import styled from 'styled-components';

interface CheckBoxWrapperProps {
  children: React.ReactNode;
}

const CheckBoxWrapper = ({ children }: CheckBoxWrapperProps) => {
  const CheckBoxWrapper = styled.div`
    display: flex;
    align-items: center;
  `;
  return <CheckBoxWrapper>{children}</CheckBoxWrapper>;
};

export default CheckBoxWrapper;
