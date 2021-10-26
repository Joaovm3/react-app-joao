// []LOGIN_DO_FORGOT_PASS deverá simular uma espera, exibir o Loading, como se estivesse enviando um e-mail
//      de recuperação de senha, e ocultar o Loading após essa espera (chamar ação de outro Reducer).
// []LOGIN_D_LOGIN deverá salvar o usuário e senha logado no estado da aplicação.

import { LOGIN_DO_FORGOT_PASS, LOGIN_DO_LOGIN } from "../actions/types";

const initialState = {
  user: {},
  userSaved: false,
  showLoading: false,
};

export const LoginReducer = (state = initialState, action) => {
  let { user, userSaved, showLoading } = state;

  switch (action.type) {
    case LOGIN_DO_FORGOT_PASS:
      showLoading = true;
      break;

    case LOGIN_DO_LOGIN:
      user = action.user;
      userSaved = action.userSaved;
      break;

    default:
      return state;
  }

  return {
    ...state,
    showLoading: showLoading,
    userSaved: userSaved,
    user: user,
  };
};
