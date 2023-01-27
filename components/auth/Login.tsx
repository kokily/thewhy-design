import type { RefObject, SyntheticEvent } from 'react';
import {
  LoginButton,
  LoginButtonBox,
  LoginContainer,
  LoginInput,
  LoginInputBox,
  LoginLayout,
} from './styles';

interface Props {
  passwordRef: RefObject<HTMLInputElement>;
  onLogin: (e: SyntheticEvent) => void;
}

export default function Login({ ...rest }: Props) {
  return (
    <LoginContainer>
      <LoginLayout>
        <h2>로그인</h2>

        <form onSubmit={rest.onLogin}>
          <LoginInputBox>
            <label htmlFor="password">
              비밀번호 <span>*</span>
            </label>

            <LoginInput
              type="password"
              name="password"
              ref={rest.passwordRef}
              placeholder="비밀번호"
              required
            />
          </LoginInputBox>

          <LoginButtonBox>
            <LoginButton type="submit">로그인</LoginButton>
          </LoginButtonBox>
        </form>
      </LoginLayout>
    </LoginContainer>
  );
}
