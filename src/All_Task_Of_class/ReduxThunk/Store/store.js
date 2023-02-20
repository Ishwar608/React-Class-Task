import {applyMiddleware, combineReducers, createStore} from 'redux';
import loginReducer from '../Reducer/loginReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    login : loginReducer
})
const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;