import styled from 'styled-components';
import InputField from './components/InputField';
import ImageSection from './components/ImageSection';
import FormButton from './components/FormButton';
import Link from './components/Link';
import Header from './components/Header';
import Paragraph from './components/Paragraph';
import CheckBoxInput from './components/CheckBoxInput';
import Label from './components/Label';

const LoginForm = () => {
  const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
  `;

  const SecondaryDiv = styled.div`
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.5);
    width: 60%;
    display: flex;
    padding: 0px;
    @media (max-width: 768px) {
      width: 80%;
    }
  `;
  const FormDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    padding: 20px;
    @media (max-width: 768px) {
      width: 100%;
    }
  `;
  const CheckBoxDiv = styled.div`
    display: flex;
    align-items: center;
  `;

  return (
    <MainDiv>
      <SecondaryDiv>
        <ImageSection />
        <FormDiv>
          <Header>Регистрация</Header>
          <Paragraph>Пожалуйста заполните все поля:</Paragraph>
          <InputField
            type="text"
            autocomplete="username"
            placeholder="Имя пользователя"
          />
          <InputField
            type="email"
            autocomplete="email"
            placeholder="Электронная почта"
          />
          <InputField
            type="password"
            autocomplete="new-password"
            placeholder="Пароль"
          />
          <InputField
            type="password"
            autocomplete="new-password"
            placeholder="Повторите пароль"
          />
          <CheckBoxDiv>
            <Label>
              <CheckBoxInput type="checkbox" />
              Agree to <Link href="#">Terms and Conditions</Link>
            </Label>
          </CheckBoxDiv>
          <FormButton colored={true}>Регистрация</FormButton>
        </FormDiv>
      </SecondaryDiv>
    </MainDiv>
  );
};

export default LoginForm;
