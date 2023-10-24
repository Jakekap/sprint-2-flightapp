const URL_BASE = 'https://flightapp-miniback.onrender.com/';

const endpoints = {
    userByEmailAndPassword: (email,password) => `${URL_BASE}users?email=${email}&&password=${password}`,
    registerUser: () => `${URL_BASE}users`,
};


export default endpoints;