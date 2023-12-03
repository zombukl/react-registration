import styled from 'styled-components';

interface CheckBoxInputProps {
  type?: string;
}

const StyledCheckBoxInput = styled.input`
  width: 13px;
  accent-color: #885043;
  margin-bottom: 10px;
`;

const CheckBoxInput = (props: CheckBoxInputProps) => {
  return <StyledCheckBoxInput type={props.type} />;
};

export default CheckBoxInput;
