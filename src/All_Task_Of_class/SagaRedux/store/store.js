import {createStore, combineReducers, applyMiddleware}  from 'redux';
import createSagaMiddleware from 'redux-saga'
import counterReducer from '../reducer/counterReducer';
import loginReducer from '../reducer/loginReducer';
import productreducer from '../reducer/productreducer';
import { rootSaga } from '../saga';


const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({

    counter : counterReducer,
    product: productreducer,
    login : loginReducer

})

const store = createStore(rootReducer,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;