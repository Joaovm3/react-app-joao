import { combineReducers } from 'redux'; 
import loading from './AppReducers';
import login from './LoginReducers';

const reducers = combineReducers({
    loading,
    login
});

export default reducers;