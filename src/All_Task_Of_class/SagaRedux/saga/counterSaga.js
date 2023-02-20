import { delay, put, takeEvery, takeLatest} from 'redux-saga/effects'
import { Decrement, Increment } from '../action/counterAction';


function* InternalIncrement()
{
   yield delay(3000);
    yield put(Increment());
}
function* DecrementIncrement()
{
   yield delay(3000);
    yield put(Decrement());
}

export function* watchIncrement()
{
    yield takeEvery('INCREMENTASYNC',InternalIncrement);
    yield takeEvery('DECREMENTASYNC',DecrementIncrement);
}