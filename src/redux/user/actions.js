import userActionTypes from './action-types.js';

export const loginUser = (payload)=>({
    type: userActionTypes.LOGIN,
    payload: payload
});

export const logoutUser = ()=>({
    type: userActionTypes.LOGOUT
});