import React, { useState } from "react";
import { useFormik } from "formik";

import {
  BodyStyle,
  ContainerStyle,
  ButtonStyle,
  LoginStyle,
} from "./style";

import { Person, Visibility, VisibilityOff, Lock } from "@material-ui/icons";

import {
  InputAdornment,
  IconButton,
  OutlinedInput,
  Input as Ipt,
} from "@mui/material";

import * as Yup from "yup";

import Input from "../../components/Input";
import Logo from "../../components/Logo";
import CheckBoxWithLabel from "../../components/CheckBoxWithLabel";
import InputWithIcon from "../../components/InputWithIcon";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleErrorFormik = (error) => {
    return (
      <div style={{color: 'red', fontSize: '10px'}}> {error} </div>
    );
  }

  const validationSchema = Yup.object().shape({
    user: Yup.string()
      .min(1, "O campo deve ser maior que 1 caractere!")
      .required("Campo obrigatório!"),
    password: Yup.number()
      .positive()
      .integer()
      .min(7, "A senha deve ter no mínimo 7 número!")
      .required("Campo obrigatório!"),
  });

  const formik = useFormik({
    initialValues: {
      user: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    /* validationSchema:{validationSchema}, */
    validate: ({ user, password }) => {
      const error = {};

      if (user.length <= 1) {
        error.user = "O campo deve ser maior que 1 caractere!";
      }

      if (!user) {
        error.user = "Campo não preenchido!";
      }

      if (password.length < 7) {
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
          <div style={{ margin: "5px" }}>
            
            <InputWithIcon
              error={formik.errors.user}
              name="user"
              label="Usuário"
              value={formik.values.user}
              onChange={formik.handleChange}
              /* onBlur={(value)=>console.log(value)} */
              fullWidth
            > 
              <Person sx={{ color: "action.active", mr: 1, my: 0.5 }} /> 
            </InputWithIcon>

            {formik.errors.user && handleErrorFormik(formik.errors.user)}

            <InputWithIcon
              error={formik.errors.password}
              helperText={formik.errors.password}
              name="password"
              label="Senha"
              type={showPassword ? "text" : "password"}
              value={formik.values.password}
              onChange={formik.handleChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            > 
              <Lock sx={{ color: "action.active", mr: 1, my: 0.5 }} /> 
            </InputWithIcon>
            
            {formik.errors.password && handleErrorFormik(formik.errors.password)} 

            <CheckBoxWithLabel />

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
