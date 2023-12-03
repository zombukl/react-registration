import React from 'react';
import styled from 'styled-components';

interface LinkProps {
  children: React.ReactNode;
  href?: string;
}

const StyledLink = styled.a`
  text-decoration: none;
  color: #885043;
  font-size: 16px;
  margin-bottom: 20px;
  align-self: flex-end;
`;

const Link = (props: LinkProps) => {
  return <StyledLink href={props.href}>{props.children}</StyledLink>;
};

export default Link;
