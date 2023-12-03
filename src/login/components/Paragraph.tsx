import React from 'react';
import styled from 'styled-components';

interface ParagraphProps {
  children: React.ReactNode;
}

const StyledParagraph = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  margin-left: 5px;
  color: #616161;
  @media (max-width: 768px) {
    margin-bottom: 15 px;
  }
`;

const Paragraph = ({ children }: ParagraphProps) => {
  return <StyledParagraph>{children}</StyledParagraph>;
};

export default Paragraph;
