import { all } from "redux-saga/effects";
import {watchIncrement} from './counterSaga'
import { watchLogin } from "./loginSaga";
import { watchProduct } from "./ProductSaga";

export function* rootSaga()
{

    yield all([watchIncrement(),watchProduct(),watchLogin()])
}