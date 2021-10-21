import React, { useState, useEffect } from "react";
import { Formik, useFormik, Form } from "formik";

import { BodyStyle, ContainerStyle, ButtonStyle, LoginStyle } from "./style";

import { Person, Visibility, VisibilityOff, Lock } from "@material-ui/icons";

import {
  Link,
  InputAdornment,
  IconButton,
  FormHelperText 
} from "@mui/material";

import * as Yup from "yup";

import Logo from "../../components/Logo";
import CheckBoxWithLabel from "../../components/CheckBoxWithLabel";
import InputWithIcon from "../../components/InputWithIcon";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [disableButton, setDisableButton] = useState(true);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleErrorFormik = (error) => {
    return <FormHelperText style={{ color: "red", fontSize: "10px" }}> {error} </FormHelperText>;
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
    validationSchema:validationSchema,
  });

  useEffect(() => {
    if (formik.isValid) {
      return setDisableButton(false)
    }
    return setDisableButton(true)
  }, [formik.isValid]);

  return (
    <BodyStyle>
      <ContainerStyle>
        <Logo />

        <LoginStyle> LOGIN </LoginStyle>

        <Formik
          initialValues={formik.initialValues}
          validationSchema={validationSchema}
        >
          {(props) => (
            <Form onSubmit={formik.handleSubmit}>
              <div style={{ margin: "5px" }}>
                <InputWithIcon
                  error={formik.errors.user}
                  name="user"
                  label="Usuário"
                  value={formik.values.user}
                  onChange={formik.handleChange}
                  onBlur={formik.handleChange}
                  fullWidth
                >
                  <Person />
                </InputWithIcon>

                {formik.errors.user && handleErrorFormik(formik.errors.user)}

                <InputWithIcon
                  error={formik.errors.password}
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

                {formik.errors.password && handleErrorFormik(formik.errors.password)}

                <CheckBoxWithLabel />
                  
                <ButtonStyle
                  disabled={disableButton}
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Acessar
                </ButtonStyle>

                <p style={{ fontSize: '10px', opacity: 0.5 }}> Esqueceu sua senha? <Link href="/esqueci-minha-senha"> Clique Aqui </Link> </p>
              </div>
            </Form>
          )}
        </Formik>
      </ContainerStyle>
    </BodyStyle>
  );
}
