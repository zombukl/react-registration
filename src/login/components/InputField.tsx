import styled from 'styled-components';

interface InputFieldProps {
  type?: string;
  autocomplete?: string;
  placeholder?: string;
}

const InputField = (props: InputFieldProps) => {
  const InputField = styled.input`
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 30px;
    font-size: 16px;
    @media (max-width: 768px) {
      width: 90%;
      margin-bottom: 20px;
    }
    @media (max-width: 930px) {
      margin-bottom: 20px;
    }
  `;
  return (
    <InputField
      type={props.type}
      autoComplete={props.autocomplete}
      placeholder={props.placeholder}
    />
  );
};

export default InputField;
