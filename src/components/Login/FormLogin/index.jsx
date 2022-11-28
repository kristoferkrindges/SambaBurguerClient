import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Container,
  BackgroundImage,
  LeftLogin,
  TextTitle,
  RightLogin,
  CardLogin,
  CardTitle,
  SubmitLogin,
  TextField,
  Field,
  LabelField,
  LoginButton,
  ProductHunt,
  ForgotPassword,
} from "./style";

import Image from "../../../assets/images/imagem.png";

function FormLogin() {
  const navigate = useNavigate();

  return (
    <Container>
      <LeftLogin>
        {/* <TextTitle>Gerencie seus burguers em ritmo de SambaBurguer</TextTitle> */}
        <ProductHunt src={Image} />
      </LeftLogin>
      <SubmitLogin>
        <RightLogin>
          <CardLogin>
            <CardTitle>Login</CardTitle>
            <TextField>
              {/* Usuário */}
              <LabelField for="usuario">Usuário</LabelField>
              <Field placeholder="Email" type="email" />
              {/* Senha */}
              <LabelField for="senha">Senha</LabelField>
              <Field placeholder="Senha" type="password" />
            </TextField>
            <LoginButton type="submit" onClick={() => navigate("/dashboard")}>
              Entrar
            </LoginButton>
            <ForgotPassword>Esqueceu a senha?</ForgotPassword>
          </CardLogin>
        </RightLogin>
      </SubmitLogin>
    </Container>
  );
}

export default FormLogin;
