const initialState = {
  orderexpand: false,
  pickupcord: {},
  deliverycord: {},
  stats: {
    orderStats: {},
    pilotStats: {},
    error: '',
    request: false,
  },
  searchText: '',
  teamsPanel: {
    teams: {},
    request: false,
  },
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case 'ORDER_EXPAND':
      return { ...state,
        orderexpand: action.value };
    case 'ORDER_CLOSE':
      return { ...state,
        orderexpand: action.value };
    case 'PICKUP_CORD':
      return { ...state,
        pickupcord: action.value };
    case 'DELIVERY_CORD':
      return { ...state,
        deliverycord: action.value };
    case 'GET_ORDER_STATS_SUCCESS':
      return { ...state,
        stats: {
          ...state.stats,
          orderStats: action.payload,
        } };
    case 'GET_PILOT_STATS_SUCCESS':
      return { ...state,
        stats: {
          ...state.stats,
          pilotStats: action.payload,
        } };
    case 'GET_STATS_FAILURE':
      return { ...state,
        stats: {
          ...state.stats,
          error: action.payload,
        } };
    case 'STATS_REQUEST':
      return { ...state,
        stats: {
          ...state.stats,
          request: action.req,
        } };
    case 'ON_SEARCH':
      return { ...state,
        searchText: action.payload,
      };
    case 'GET_TEAMS_SUCCESS':
      return { ...state,
        teamsPanel: {
          ...state.teamsPanel,
          teams: action.payload,
        },
      };
    case 'GET_TEAMS_FAILURE':
      return { ...state,
        teamsPanel: {
          ...state.teamsPanel,
          request: action.payload,
        },
      };
    default:
      return state;
  }
}

export default homeReducer;
