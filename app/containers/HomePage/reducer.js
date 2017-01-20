const initialState = {
  orderexpand: false,
  pickupcord: {},
  deliverycord: {},
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
    default:
      return state;
  }
}

export default homeReducer;
