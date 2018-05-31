import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from '../reducers/auth.reducer';

/* Permet de sélectionner une partie du state général
Le auth state est dans le state général */


// le auth match avec le nom dans le state général. feature c'est parce qu'on est dnas le général et on
// récup un store
export const authSelector = createFeatureSelector('auth');
export const errorAuthSelector = createSelector(authSelector,
    (authState: AuthState) => {
        if (authState) {
            return authState.error;
        } else {
            return null;
        }

    }
);

export const authTokenSelector = createSelector(authSelector,
    (authState: AuthState) => {
        if (authState) {
            return authState.token;
        } else {
            return null;
        }
    });



export const isLoggedIn = createSelector(authSelector,
    (authState: AuthState) => {
        if (authState) {
            return authState.isLoggedIn;

        } else {
            return null;
        }
    });
    
export const currentUserSelector = createSelector(authSelector,
    (authState: AuthState) => {
        if (authState) {
            return authState.user;

        } else {
            return null;
        }
    });


    