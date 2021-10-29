import { useState, useEffect } from "react";
import { Formik, useFormik, Form } from "formik";
import * as Yup from "yup";

import { Person, Visibility, VisibilityOff, Lock } from "@material-ui/icons";

import {
  Typography,
  Button,
  InputAdornment,
  IconButton,
  FormHelperText,
} from "@mui/material";

import { BodyStyle, ContainerStyle, ButtonStyle, LoginStyle } from "./style";

import Logo from "../../components/Logo";
import CheckBoxWithLabel from "../../components/CheckBoxWithLabel";
import InputWithIcon from "../../components/InputWithIcon";
import Modal from "../../components/Modal";
import Input from "../../components/Input";
import Snackbar from "../../components/Snackbar";

import { useDispatch, useSelector } from "react-redux";
import { HideLoading, ShowLoading } from "../../redux/actions/AppActions";
import {
  AwaitForgotPassword,
  SaveLogin,
  SaveChecked,
} from "../../redux/actions/LoginActions";

export default function Login() {
  const dispatch = useDispatch();

  const { user, userSaved, showForgotPass } = useSelector((state) => state.login);

  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [open, setOpen] = useState(false);

  const handleCheckBox = () => {
    dispatch(SaveChecked(!userSaved));
  }

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const openShowModal = () => setShowModal(!showModal);

  const validationEmailSchema = Yup.object().shape({
    email: Yup.string()
      .email("Formato de email Inválido!")
      .required("O campo de email é obrigatório!"),
  });

  const handleShowModal = () => {
    const validateEmail = (e) => {
      const email = e.target.value;

      validationEmailSchema
        .validate({
          email: email,
        })
        .then(() => setValidEmail(true))
        .catch((err) => setErrorMessage(err.message), setValidEmail(false));
    };

    const handleSuccessMessage = () => {
      dispatch(AwaitForgotPassword());
      return setOpen(!open);
    };

    return (
      <Modal
        onClose={() => setShowModal(false)}
        disabled={!validEmail}
        title="Esqueci minha senha"
        content={`Para redefinir sua senha, informe o usuário ou e-mail cadastrado na sua conta e lhe enviaremos um link com as intruções.`}
        onSubmit={handleSuccessMessage}
      >
        <Input
          label="Email ou usuário"
          error={!validEmail}
          helperText={!validEmail ? errorMessage : ""}
          type="email"
          margin="dense"
          fullWidth
          onChange={(event) => validateEmail(event)}
        />
      </Modal>
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
      user: userSaved ? user.username : "",
      password: userSaved ? user.password : "",
    },
    onSubmit: (values) => {
      const { user, password } = values;

      dispatch(ShowLoading());
      setTimeout(() => {
        dispatch(
          SaveLogin({
            username: user,
            password: password,
          })
        );

        dispatch(HideLoading());
      }, 3000);
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

                <CheckBoxWithLabel onClick={handleCheckBox} checked={userSaved} />
                
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
          <p style={{ opacity: 0.5, textAlign: "center" }}>
            Esqueceu sua senha?
            <Button onClick={openShowModal}>Clique Aqui</Button>
          </p>
        </div>

        {showModal ? handleShowModal() : null}
        {open && (
          <Snackbar severity="success" onClose={() => setOpen(false)}>
            Email enviado com sucesso!
          </Snackbar>
        )}
      </ContainerStyle>
    </BodyStyle>
  );
}
