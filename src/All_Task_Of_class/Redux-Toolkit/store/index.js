import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../../Redux-Toolkit/slice/counterSlice';
import postsReducer from '../../Redux-Toolkit/slice/loginSlice';

const store = configureStore({
    reducer:{
        counter: counterReducer,
        posts: postsReducer
    }
});

export default store;