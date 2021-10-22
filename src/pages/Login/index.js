import React, { useState } from "react";
import { Formik, useFormik, Form } from "formik";

import { BodyStyle, ContainerStyle, ButtonStyle, LoginStyle } from "./style";

import { Person, Visibility, VisibilityOff, Lock } from "@material-ui/icons";

import {
  Typography,
  Button,
  InputAdornment,
  IconButton,
  FormHelperText,
} from "@mui/material";

import * as Yup from "yup";

import Logo from "../../components/Logo";
import CheckBoxWithLabel from "../../components/CheckBoxWithLabel";
import InputWithIcon from "../../components/InputWithIcon";
import Modal from "../../components/Modal";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const openShowModal = () => setShowModal(!showModal);

  const handleShowModal = () => {
    return (
      <Modal
        onClose={() => setShowModal(false)}
        inputLabel="Email ou usuário"
        title="Esqueci minha senha"
        content={`Para redefinir sua senha, informe o usuário ou e-mail cadastrado na sua conta e lhe enviaremos um link com as intruções.`}
        onSubmit={() => alert("Email enviado!")}
      />
    );
  };

  const pattern = /^[a-z0-9]+$/i;
  const minSevenNumbers = 700000;

  const validationSchema = Yup.object().shape({
    user: Yup.string()
      .min(2, "O campo deve ter no mínimo 2 caracteres!")
      .matches(pattern, "Não pode haver caracteres especiais!")
      .required("Campo obrigatório!"),
    password: Yup.number()
      .typeError("A senha deve ser um número!")
      .positive("Deve ser um número positivo")
      .integer("Deve ser um número inteiro")
      .min(minSevenNumbers, "A senha deve ter no mínimo 7 números!")
      .required("Campo obrigatório!"),
  });

  const formik = useFormik({
    initialValues: {
      user: "",
      password: "",
    },
    onSubmit: (values) => {
      /* setTimeout(() => {
        
      }, 3000);
      */
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: validationSchema,
  });

  return (
    <BodyStyle>
      <ContainerStyle>
        <Logo />

        <Typography variant="h4">
          <LoginStyle> LOGIN </LoginStyle>
        </Typography>

        <Formik initialValues={formik.initialValues}>
          {(props) => (
            <Form onSubmit={formik.handleSubmit}>
              <div style={{ margin: "20px" }}>
                <InputWithIcon
                  error={formik.errors.user ? true : false}
                  name="user"
                  label="Usuário"
                  value={formik.values.user}
                  onChange={formik.handleChange}
                  onBlur={formik.handleChange}
                >
                  <Person />
                </InputWithIcon>

                <div style={{ width: "100%", height: 20 }}>
                  <FormHelperText error>
                    {formik.errors.user && formik.errors.user}
                  </FormHelperText>
                </div>

                <InputWithIcon
                  error={formik.errors.password ? true : false}
                  name="password"
                  label="Senha"
                  type={showPassword ? "text" : "password"}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton onClick={handleClickShowPassword}>
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                >
                  <Lock />
                </InputWithIcon>

                <div style={{ width: "100%", height: 20 }}>
                  <FormHelperText error>
                    {formik.errors.password && formik.errors.password}
                  </FormHelperText>
                </div>
                <CheckBoxWithLabel />

                <ButtonStyle
                  disabled={!formik.isValid || !formik.dirty}
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Acessar
                </ButtonStyle>
              </div>
            </Form>
          )}
        </Formik>

        <div style={{ marginTop: 30 }}>
          <p style={{ opacity: 0.5 }}>
            Esqueceu sua senha?
            <Button onClick={openShowModal}>Clique Aqui</Button>
          </p>
        </div>

        {showModal ? handleShowModal() : null}
        
      </ContainerStyle>
    </BodyStyle>
  );
}
