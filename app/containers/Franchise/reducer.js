const initialState = {
  franchiseCord: {},
  franchiseGeoFence: [],
  reqGeoFence: false,
  newFormState: {
    name: '',
    description: '',
  },
};

function franchiseReducer(state = initialState, action) {
  switch (action.type) {
    case 'POST_FRANC_CORD':
      return {
        ...state,
        franchiseCord: action.payload,
      };
    case 'POST_GEO_FENCE':
      return {
        ...state,
        franchiseGeoFence: action.payload,
        reqGeoFence: !state.reqGeoFence,
      };
    case 'ON_FORM_CHANGE':
      return {
        ...state,
        newFormState: action.payload,
      };
    default:
      return state;
  }
}

export default franchiseReducer;
