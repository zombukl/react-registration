import styled from 'styled-components';

interface CheckBoxInputProps {
  type?: string;
}

const CheckBoxInput = (props: CheckBoxInputProps) => {
  const CheckBoxInput = styled.input`
    width: 13px;
    accent-color: #885043;
    margin-bottom: 10px;
  `;
  return <CheckBoxInput type={props.type} />;
};

export default CheckBoxInput;
