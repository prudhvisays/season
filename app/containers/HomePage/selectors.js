// import { createSelector } from 'reselect';
// import _ from 'lodash';
//
// const homeState = () => (state) => state.get('home');
// const orderData = () => (state) => state.get('home').get('data').get('ordersData');
// const ordExpand = () => (state) => state.get('home').get('orderexpand');
// const pickCord = () => (state) => state.get('home').get('pickupcord');
// const delCord = () => (state) => state.get('home').get('deliverycord');
// const getAssignedData = () => createSelector(
//   orderData(),
//     (ordersData) => {
//       _.filter(ordersData, (data) => data.status === 'ASSIGNED');
//     },
// );
//
// export {
//   homeState,
//   orderData,
//   getAssignedData,
//   ordExpand,
//   delCord,
//   pickCord,
// };
