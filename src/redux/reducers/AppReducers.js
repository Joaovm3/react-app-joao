import { APP_HIDE_LOADING, APP_SHOW_LOADING } from "../actions/types";

const initialState = {
  showLoading: false,
};

export const LoadingReducer = (state = initialState, action) => {
  let show = state.showLoading;

  switch (action.type) {
    case APP_HIDE_LOADING:
      show = false;
      break;

    case APP_SHOW_LOADING:
      show = true;
      break;

    default:
      return state;
  }

  return {
    ...state,
    showLoading: show,
  };
  
};
