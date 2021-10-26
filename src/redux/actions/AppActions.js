import { APP_SHOW_LOADING, APP_HIDE_LOADING } from './types';

export const ShowLoading = () => {
    return {
        type: APP_SHOW_LOADING
    };
};

export const HideLoading = () => {
    return {
        type: APP_HIDE_LOADING
    };
};