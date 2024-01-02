import InputField from './components/InputField';
import ImageSection from './components/ImageSection';
import FormButton from './components/FormButton';
import Link from './components/Link';
import Header from './components/Header';
import Paragraph from './components/Paragraph';
import CheckBoxInput from './components/CheckBoxInput';
import Label from './components/Label';
import LoginPageWrapper from './components/wrappers/LoginPageWrapper';
import LoginFormWrapper from './components/wrappers/LoginFormWrapper';
import FormContentWrapper from './components/wrappers/FormContentWrapper';
import CheckBoxWrapper from './components/wrappers/CheckBoxWrapper';

const LoginForm = () => {
  return (
    <LoginPageWrapper>
      <LoginFormWrapper>
        <ImageSection />
        <FormContentWrapper>
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
          <CheckBoxWrapper>
            <Label>
              <CheckBoxInput type="checkbox" />
              Agree to <Link href="#">Terms and Conditions</Link>
            </Label>
          </CheckBoxWrapper>
          <FormButton colored={true}>Регистрация</FormButton>
        </FormContentWrapper>
      </LoginFormWrapper>
    </LoginPageWrapper>
  );
};

export default LoginForm;
