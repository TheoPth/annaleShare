import { Action } from "@ngrx/store";
import { User } from "../../models/user.model";
import { JwtToken } from "../../models/jwt-token.model";

// Ici on met toute les actions qui sont reliées à auth

export const TRY_SIGNUP = '[ user ] try signup';
export const SIGNUP_SUCCESS = '[ user ] signup success';
export const SIGNUP_ERROR = '[ user ] signup error'

export const TRY_SIGNIN = '[ user ] try signin';
export const SIGNIN_SUCCESS = '[ user ] signin success';
export const SIGNIN_ERROR = '[ user ] signin error'

export const TRY_FETCH_CURRENT_USER = '[ user ] try fetch current user';
export const SET_CURRENT_USER = '[ user ] set currrent user';

export const TRY_REFRESH_TOKEN = ' [ user ] try refresh token';


export const LOGOUT = '[ user ] loggout';

export class TrySignup implements Action {
    readonly type = TRY_SIGNUP;
    constructor(public payload: User) {
    }
}

export class SignupSuccess implements Action {
    readonly type = SIGNUP_SUCCESS;
    constructor(public payload: User) { 
    }
}

// L'erreur est en any car on ne sait aps toujours de quelle type est l'erreur si on ne code pas le back
export class SignupError implements Action {
    readonly type = SIGNUP_ERROR;
    constructor(public payload: any) {
    }
}

export class TrySignin implements Action {
    readonly type = TRY_SIGNIN;
    constructor(public payload: { email : string, password: string }) {
    }
}

export class SigninSuccess implements Action {
    readonly type = SIGNIN_SUCCESS;
    constructor(public payload: string) { 
    }
}

export class SigninError implements Action {
    readonly type = SIGNIN_ERROR;
    constructor(public payload: any) {
    }
}

// On se sert du token du token qui est dans le curretn user
export class TryFetchCurrentUser implements Action {
    readonly type = TRY_FETCH_CURRENT_USER;
   
}

// Lorsque le back nous renvoie le user cela permet de le mettre dans le store
export class SetCurrentUser implements Action {
    readonly type = SET_CURRENT_USER;
    constructor(public payload: User){};
   
}

export class TryRefreshToken implements Action {
    readonly type = TRY_REFRESH_TOKEN;
   
}

export class Logout implements Action {
    readonly type = LOGOUT;
   
}
    


// Je pense que ça permet dans le reducer de repérer directement toute les actions qui sont liés aux action de auth
// Permet de typer l'action
export type AuthActions = TrySignup | SignupSuccess | SignupError | TrySignin | SigninSuccess | SigninError | TryFetchCurrentUser | SetCurrentUser | TryRefreshToken | Logout;


