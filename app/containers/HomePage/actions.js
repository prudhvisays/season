export function orderExpand(value) {
  return {
    type: 'ORDER_EXPAND',
    value,
  };
}
export function orderClose(value) {
  return {
    type: 'ORDER_CLOSE',
    value,
  };
}

export function pickupCord(value) {
  return {
    type: 'PICKUP_CORD',
    value,
  };
}

export function deliveryCord(value) {
  return {
    type: 'DELIVERY_CORD',
    value,
  };
}

export function getStats() {
  return {
    type: 'GET_STATS',
  };
}

export function statsRequesting(req) {
  return {
    type: 'STATS_REQUEST',
    req,
  };
}
export function getOrderStatsSuccess(data) {
  return {
    type: 'GET_ORDER_STATS_SUCCESS',
    payload: data,
  };
}
export function getPilotStatsSuccess(data) {
  return {
    type: 'GET_PILOT_STATS_SUCCESS',
    payload: data,
  };
}

export function getStatsFailure(err) {
  return {
    type: 'GET_STATS_FAILURE',
    payload: err,
  };
}

export function onSearch(search) {
  return {
    type: 'ON_SEARCH',
    payload: search,
  };
}

export function getTeams() {
  return {
    type: 'GET_TEAMS',
  };
}

export function getTeamsSuccess(data) {
  return {
    type: 'GET_TEAMS_SUCCESS',
    payload: data,
  };
}

export function getTeamsFailure(data) {
  return {
    type: 'GET_TEAMS_FAILURE',
    payload: data,
  };
}

export function getTeamSales(data) {
  return {
    type: 'GET_TEAM_SALES',
    payload: data,
  };
}

export function getTeamSalesSuccess(data) {
  return {
    type: 'GET_TEAM_SALES_SUCCESS',
    payload: data,
  };
}
export function getTeamSalesFailure(data) {
  return {
    type: 'GET_TEAM_SALES_FAILURE',
    payload: data,
  };
}
export function getTeamCustomers(data) {
  return {
    type: 'GET_TEAM_CUSTOMERS',
    payload: data,
  };
}

export function getTeamCustomersSuccess(data) {
  return {
    type: 'GET_TEAM_CUSTOMERS_SUCCESS',
    payload: data,
  };
}
export function getTeamCustomersFailure(data) {
  return {
    type: 'GET_TEAM_CUSTOMERS_FAILURE',
    payload: data,
  };
}
