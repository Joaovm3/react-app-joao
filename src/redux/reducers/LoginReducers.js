import { LOGIN_DO_FORGOT_PASS, LOGIN_DO_LOGIN, LOGIN_CHECKED } from "../actions/types";

const initialState = {
  user: {
    username: "",
    password: "",
  },
  userSaved: false,
  showForgotPass: false,
};

export const LoginReducer = (state = initialState, action) => {
  let { user, userSaved, showForgotPass } = state;

  switch (action.type) {
    case LOGIN_DO_FORGOT_PASS:
      showForgotPass = true;
      break;

    case LOGIN_DO_LOGIN:
      user = action.user;
      break;
    case LOGIN_CHECKED:
      userSaved = action.userSaved;
      break;
      
    default:
      return state;
  }

  return {
    ...state,
    showForgotPass: showForgotPass,
    userSaved: userSaved,
    user: user,
  };
};
