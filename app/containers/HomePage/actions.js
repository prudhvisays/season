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
  console.log(value);
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

export function getOrders() {
  console.log('hello');
  return {
    type: 'GET_ORDERS',
  };
}

export function getOrdersSuccess(data) {
  console.log(data);
  return {
    type: 'GET_ORDERS_SUCCESS',
    payload: data,
  };
}

export function getOrdersFailure(err) {
  return {
    type: 'GET_ORDERS_FAILURE',
    payload: err,
  };
}
