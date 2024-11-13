import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADED_FAIL,
    USER_LOADED_SUCCESS,
} from '../actions/types';

const initialState = {
    accee: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
    isAuthenticated: null,
    user: null

};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case LOGIN_SUCCESS:
            localStorage.setItem('access', payload.acess);
             return {
                    ...state,
                    isAuthenticted: true,
                    access: payload.access,
                    user: payload.refresh
             }
        case USER_LOADED_SUCCESS:
                return {
                    ...state,
                    user: payload

                }
        case USER_LOADED_FAIL:
                return {
                      ...state,
                      user: null
                }
        case LOGIN_FAIL:
               
                localStorage.removeItem('access');
                localStorage.removeItem('refresh');
                return {
                    ...state,
                    isAuthenticted: false,
                    access: null,
                    user: null
                }
        default:
            return state
               
        
    }
};
