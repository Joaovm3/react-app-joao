import React from "react";
import { useFormik } from "formik";

import { BodyStyle, ContainerStyle, ButtonStyle, LoginStyle } from "./style";

import Input from "../../components/Input";
import Logo from "../../components/Logo";

export default function Login() {
  const formik = useFormik({
    initialValues: {
      user: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validate: ({ user, password }) => {
      const error = {};

      if (user.length <= 1) {
        error.user = "O campo deve ser maior que 1 caractere!";
      }

      if (!user) {
        error.user = "Campo não preenchido!";
      }
      
      if (password.length < 7){
        error.password = "A senha deve ter no mínimo 7 caracteres!";
      }

      if (!password) {
        error.password = "Campo não preenchido!";
      }

      return error;
    },
  });

  return (
    <BodyStyle>
      <ContainerStyle>
        <Logo />
        <LoginStyle> LOGIN </LoginStyle>
        <form onSubmit={formik.handleSubmit}>
          <div style={{ margin: "10px" }}>
            <Input
              error={formik.errors.user}
              helperText={formik.errors.user}
              name="user"
              label="Informe o usuário"
              value={formik.values.user}
              onChange={formik.handleChange}
              /* onBlur={(value)=>console.log(value)} */
              fullWidth
            />
          </div>
          
          <div style={{ margin: "10px" }}>
            <Input
              error={formik.errors.password}
              helperText={formik.errors.password}
              name="password"
              label="Informe a Senha"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              fullWidth
            />
          </div>

          <div style={{ margin: "10px" }}>
            <ButtonStyle
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Acessar
            </ButtonStyle>
          </div>
        </form>
      </ContainerStyle>
    </BodyStyle>
  );
}
