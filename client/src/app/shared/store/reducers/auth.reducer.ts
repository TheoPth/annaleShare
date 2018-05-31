import { User } from './../../models/user.model';
import { Action } from '@ngrx/store';
import { AuthActions, SIGNIN_ERROR, SIGNUP_ERROR, SIGNIN_SUCCESS, LOGOUT, TRY_FETCH_CURRENT_USER, SET_CURRENT_USER } from '../action/auth.actions';

export interface AuthState {
    user: User;
    token: string;
    // On a besoin de ça pour le retour du backend
    error: string;
    isLoggedIn: boolean;
};

const initialState = {
    user : null,
    token: localStorage.getItem('token'),
    error: null,
    isLoggedIn: false
}


// Fonction qui est pure on ne pas modifier les parametres
export function authReducer(state: AuthState = initialState, action: AuthActions) {
    switch (action.type) {
        case SIGNIN_ERROR : {
            return {
                ...state,
                // On set l'erreur si elle arrive
                error: action.payload
            };
        }
        case SIGNUP_ERROR : {
            return {
                ...state,
                // On set l'erreur si elle arrive
                error: action.payload
            };
        }

        case SIGNIN_SUCCESS : {
            return {
                ...state,
                token: action.payload,
                isLoggedIn: true,
                error: null
            }
        }

        case LOGOUT : {
            return {
                ...state,
                user: null,
                token : null,
                isLoggedIn: false,
                error : null
            }
        }
         
        case SET_CURRENT_USER : {
            return {
                ...state,
                
                user : action.payload
            }
        }
    }
    return state;
}