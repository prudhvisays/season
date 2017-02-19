import { takeLatest, takeEvery } from 'redux-saga';
import { take, call, put, select, fork, cancel, delay, race } from 'redux-saga/effects';
import realData from '../../Api';
import { getOrderStatsSuccess, getPilotStatsSuccess, getStatsFailure, statsRequesting, getTeamsSuccess, getTeamsFailure, getTeamSalesSuccess, getTeamSalesFailure } from './actions';
import moment from 'moment';

export function* fetchOrderStats() {
  const statsDate = moment().format('YYYYMMDD');
  yield put(statsRequesting(true));
  try {
    const [orderData, pilotData] = yield [
      call(realData.getOrderStatsApi, statsDate),
      call(realData.getPilotStatsApi, statsDate),
    ];
    console.log(orderData);
    yield put(getOrderStatsSuccess(orderData));
    yield put(getPilotStatsSuccess(pilotData));
  } catch (err) {
    yield put(getStatsFailure(err.message));
  } finally {
    yield put(statsRequesting(false));
  }
}

export function* fetchOrderStatsWatch() {
  yield fork(takeLatest, 'GET_STATS', fetchOrderStats);
}

export function* fetchOrderStatsRoot() {
  const main = yield fork(fetchOrderStatsWatch);
  yield take('LOCATION_CHANGE');
  yield cancel(main);
}
// TEAMS
export function* fetchTeams() {
  try {
    const response = yield call(realData.getTeamsApi);
    yield put(getTeamsSuccess(response));
  } catch (error) {
    if (error.response) {
      yield put(getTeamsFailure(error.response.data));
    }
  }
}

export function* loadTeamSales(teamsPanel) {
  const { teams } = teamsPanel;
  try {
    const teamSales = yield call(realData.getTeamSalesApi);
    yield put(getTeamSalesSuccess({ response, teamSales }));
  } catch (error) {
    if (error.response) {
      yield put(getTeamsSuccess(error.response.data));
    }
  }
}
export function* fetchTeamsFlow() {
  while(true) {
    yield take('GET_TEAMS');
    yield call(fetchTeams);
  }
}
export const getProject = () => (state) => state.get('home')

export function* loadTeamSalesFlow() {
  while(true) {
    yield take('GET_TEAMS_SUCCESS');
    const { teamsPanel }= yield select(getProject());
    console.log("SALES FLOW " + teamsPanel);
    yield call(loadTeamSales, teamsPanel);
  }
}

export function* fetchTeamsWatch() {
  yield fork(fetchTeamsFlow);
}

export function* loadTeamSalesWatch() {
  yield fork(takeLatest, loadTeamSalesFlow);
}

export function* fetchTeamsRoot() {
  const Teamwatcher = yield fork(fetchTeamsWatch);
  yield take('LOCATION_CHANGE');
  yield cancel(Teamwatcher);
}

export function* loadTeamSalesRoot() {
  const salesWatcher = yield fork(loadTeamSalesFlow);
  yield take('LOCATION_CHANGE');
  yield cancel(salesWatcher);
}

// TEAM SALES
export function* fetchTeamSales(salesDate) {
  console.info(salesDate);
  try {
    const response = yield call(realData.getTeamSalesApi, salesDate);
    yield put(getTeamSalesSuccess(response));
  } catch (error) {
    if (error.response) {
      yield put(getTeamSalesFailure(error.response.data));
    }
  }
}
export function* fetchTeamSalesFlow() {
  while(true) {
    const request = yield take('GET_TEAM_SALES');
    const dates = request.payload;
    console.log(dates);
    let salesDate;
    if (dates !== undefined) {
      salesDate = dates;
    } else {
        const nowDate = moment().format('YYYYMMDD');
        salesDate = {
          fromDate: nowDate,
          toDate: nowDate,
        };
    }
    yield call(fetchTeamSales, salesDate);
  }
}
export function* fetchTeamSalesWatch() {
  yield fork(fetchTeamSalesFlow);
}

export function* fetchTeamSalesRoot() {
  const salesRoot = yield fork(fetchTeamSalesWatch);
  yield take('LOCATION_CHANGE');
  yield cancel(salesRoot);
}
export default [
  fetchOrderStatsWatch,
  fetchTeamsRoot,
  fetchTeamSalesRoot,
  loadTeamSalesRoot,
];
