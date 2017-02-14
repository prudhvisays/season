const API_URL = 'https://season-boy-api.herokuapp.com/api';
const localStorage = global.window.localStorage;

function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
   } else {
     return Promise.reject(new Error(response.statusText));
   }
}
function json(response) {
  return response.json();
}
const auth = {
  login(Username, Password) {
    const payload = {
      username: Username,
      password: Password,
      userRole: 'PILOT',
    };
    const GET_ORDERS_API = `${API_URL}/auth/login`;
    const data = JSON.stringify(payload);
    if (auth.loggedIn()) {
      return Promise.resolve(true);
    }
    return fetch(GET_ORDERS_API, {
      method: 'POST',
      mode: 'nocors',
      headers: new Headers({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }),
      body: data,
    }).then(status)
      .then(json)
      .then((newData) => {
        console.log(newData);
        localStorage.token = newData.token;
        const { username, pilotId } = newData;
        localStorage.setItem('sessionData', JSON.stringify({ username, pilotId }));
        return Promise.resolve(true);
      });
  },

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('sessionData');
    return Promise.resolve(true);
  },
  loggedIn() {
    return !!localStorage.token;
  },
};

export default auth;
