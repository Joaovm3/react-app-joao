import { combineReducers } from 'redux'; 
import { LoadingReducer } from './AppReducers';
import { LoginReducer } from './LoginReducers';

const reducers = combineReducers({
    loading: LoadingReducer,
    login: LoginReducer
});

export default reducers;