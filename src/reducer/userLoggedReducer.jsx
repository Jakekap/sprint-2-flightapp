
export const userLoggedInitial = {
    isAuthenticated: false,
    user: null
}

const userLoggedReducer = (state = userLoggedInitial, action) => {
    switch (action.type) {
        case 'LOGIN': 
            console.log(action);
            return action.payload;
        case 'LOGOUT':
            console.log(action);
            return userLoggedInitial; 
            
        case 'UPDATEPROFILE':
            console.log(action);
            return action.payload;
        default:
            return state;
    }
}

export default userLoggedReducer;