import { takeLatest, takeEvery } from 'redux-saga';
import { take, call, put, select, fork, cancel } from 'redux-saga/effects';
import { getOrdersApi } from '../../Api';
import { getOrdersSuccess, getOrdersFailure } from './actions';

export function* getOrdersData() {
  try {
    const orderData = yield call(getOrdersApi);
    console.log(orderData);
    yield put(getOrdersSuccess(orderData));
  } catch (e) {
    yield put(getOrdersFailure(e));
  }
}

export function* getOrdersWatch() {
  yield takeLatest('GET_ORDERS', getOrdersData);
}

export function* getOrdersRoot() {
  yield fork(getOrdersWatch);
}

export default [
  getOrdersRoot,
];
