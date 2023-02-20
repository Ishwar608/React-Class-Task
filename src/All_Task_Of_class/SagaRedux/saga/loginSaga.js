import axios from 'axios';
import { call, delay, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {SUC,Failed} from '../action/loginAction'


const url = "https://real-pear-fly-kilt.cyclic.app/accounts/authenticate";

const fetchGetProducts = (data) => {
    return axios.post(url,data)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  };


function* loginInternal(action)
{
   yield delay(3000);

   try
   {
  let d=   yield call(fetchGetProducts,action.payload);
  yield put(SUC(d));

   }
   catch(r)
   {
    yield put(Failed(r));

   }
}

export function* watchLogin()
{
    yield takeLatest('START',loginInternal);
}