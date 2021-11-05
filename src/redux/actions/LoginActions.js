import { HideLoading, ShowLoading } from "./AppActions";
import { LOGIN_DO_FORGOT_PASS, LOGIN_DO_LOGIN, LOGIN_CHECKED } from "./types";

export const ForgotPassword = () => {
  return {
    type: LOGIN_DO_FORGOT_PASS,
  };
};

export const AwaitForgotPassword = () => {
  return (dispatch) => {
    dispatch(ShowLoading());
    setTimeout(() => {
      dispatch(HideLoading());
      dispatch(ForgotPassword());
    }, 3000);
  };
};

export const SaveLogin = (user, password) => {
  return {
    type: LOGIN_DO_LOGIN,
    user: user,
    password: password,
  };
};

export const SaveChecked = (userSaved) => {
  return {
    type: LOGIN_CHECKED,
    userSaved: userSaved,
  }
}
