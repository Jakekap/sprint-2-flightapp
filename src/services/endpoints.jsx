const URL_BASE = 'http://localhost:3000/';

const endpoints = {
    userByEmailAndPassword: (email,password) => `${URL_BASE}users?email=${email}&&password=${password}`,
    registerUser: () => `${URL_BASE}users`,
};


export default endpoints;