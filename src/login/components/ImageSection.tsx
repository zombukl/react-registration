import styled from 'styled-components';
import loginImage from '../../assets/Picture.svg';

const StyledImageSection = styled.img`
  width: 50%;
  height: 100%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const ImageSection = () => {
  return <StyledImageSection loading="lazy" src={loginImage} alt="" />;
};

export default ImageSection;
