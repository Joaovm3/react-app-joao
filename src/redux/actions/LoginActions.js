import { LOGIN_DO_FORGOT_PASS, LOGIN_DO_LOGIN } from "./types";

export const AwaitForgotPassword = () => {
  return {
    type: LOGIN_DO_FORGOT_PASS,
  };
};

export const SaveLogin = (user, password) => {
  return {
    type: LOGIN_DO_LOGIN,
    user: user,
    password: password,
  };
};
