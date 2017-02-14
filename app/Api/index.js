const API_URL = 'https://season-boy-api.herokuapp.com/api/';

export const getOrdersApi = () => {
  const GET_ORDERS_API = `${API_URL}/orders`;
  return fetch(GET_ORDERS_API)
    .then((response) => {
      if(!response.bodyUsed) {
      const res = response.json();
      console.log(res);
      return res;
      }
    }).then((data) => {
      console.log(data);
      return data;
    }).catch((err) => err);
};
