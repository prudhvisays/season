import axios from 'axios';
const API_URL = 'https://season-boy-api.herokuapp.com/api';

const realData = {
  getOrderStatsApi(statsDate) {
    const StatsDate = {
      date: statsDate,
    };
    const GET_ORDER_STATS_API = `${API_URL}/orders/stats`;
    return axios({
      method: 'POST',
      url: GET_ORDER_STATS_API,
      data: StatsDate,
      responseType: 'json',
    }).then((response) => response.data);
  },
  getPilotStatsApi(statsDate) {
    const StatsDate = {
      date: statsDate,
    };
    const GET_PILOT_STATS_API = `${API_URL}/pilots/stats`;
    return axios({
      method: 'POST',
      url: GET_PILOT_STATS_API,
      data: StatsDate,
      responseType: 'json',
    }).then((response) => response.data);
  },
  getTeamsApi() {
    const GET_TEAMS_API = `${API_URL}/teams`;
    return axios({
      method: 'GET',
      url: GET_TEAMS_API,
      responseType: 'json',
    }).then((response) => response.data);
  },
  getTeamSalesApi(salesDate) {
    const GET_TEAM_SALES_API = `${API_URL}/teams/sales`;
    return axios({
      method: 'POST',
      url: GET_TEAM_SALES_API,
      data: salesDate,
      responseType: 'json',
    }).then((response) => response.data);
  },
  getTeamCustomersApi(salesDate) {
    const GET_TEAM_CUSTOMERS_API = `${API_URL}/customers/sales`;
    return axios({
      method: 'POST',
      url: GET_TEAM_CUSTOMERS_API,
      data: salesDate,
      responseType: 'json',
    }).then((response) => response.data);
  },
};

export default realData;
