import { Action } from  "@ngrx/store";
import { Donnee } from '../models/donnee.model';
import { Droit } from '../models/droit.model';
import { UserMonitor } from "../models/userMonitor.model";


// GET DATA
export const FETCH_SPECIALITE = '[ monitoring ] fetch specialite';
export const FETCH_SPECIALITE_SUCCESS = '[ monitoring ] fetch specialite success';
export const FETCH_MATIERE = '[ monitoring ] fetch matiere';
export const FETCH_MATIERE_SUCCESS = '[ monitoring ] fetch matiere success';
export const FETCH_USER = '[ monitoring ] fetch user';
export const FETCH_USER_SUCCESS = '[ monitoring ] fetch user success';
export const FETCH_DROIT_USER_SELECTED = '[ monitoring ] fetch droit user selected';
export const FETCH_DROIT_USER_SELECTED_SUCCESS = '[ monitoring ] fetch droit user selected success';

export const FETCH_DROIT = '[ monitoring ] fetch droit';
export const FETCH_DROIT_SUCCESS = '[ monitoring ] fetch droit success';

export const FETCH_SHARE_LINK = '[monitoring] fetch share link';
export const FETCH_SHARE_LINK_SUCCESS = '[ monitoring ] fetch share link success';

export const JOIN_SPECIALITE = '[ monitoring ] join specialite';

export class JoinSpecialite implements Action {
    readonly type = JOIN_SPECIALITE;
    constructor(public payload: string){}
};

export class FetchShareLink implements Action {
    readonly type = FETCH_SHARE_LINK;
    constructor(public payload: {idDroit : number, temps : number}){}
};

export class FetchShareLinkSuccess implements Action {
    readonly type = FETCH_SHARE_LINK_SUCCESS;
    constructor(public payload: string ){}
};

export class FetchSpecialite implements Action {
    readonly type = FETCH_SPECIALITE;   
};

export class FetchSpecialiteSuccess implements Action {
    readonly type = FETCH_SPECIALITE_SUCCESS;
    constructor(public payload: Donnee[] ){}
};

export class FetchDroit implements Action {
    readonly type = FETCH_DROIT; 
};

export class FetchDroitSuccess implements Action {
    readonly type = FETCH_DROIT_SUCCESS;
    constructor(public payload: Droit[] ){}
};

export class FetchMatiere implements Action {
    readonly type = FETCH_MATIERE;   
};

export class FetchMatiereSuccess implements Action {
    readonly type = FETCH_MATIERE_SUCCESS;
    constructor(public payload: Donnee[] ){}
};

export class FetchUser implements Action {
    readonly type = FETCH_USER;   
};

export class FetchUserSuccess implements Action {
    readonly type = FETCH_USER_SUCCESS;
    constructor(public payload: UserMonitor[]){}
};

export class FetchDroitUserSelected implements Action {
    readonly type = FETCH_DROIT_USER_SELECTED;   
};

export class FetchDroitUserSelectedSuccess implements Action {
    readonly type = FETCH_DROIT_USER_SELECTED_SUCCESS;
    constructor(public payload: Droit[] ){}
};

// SET DATA
export const SET_DROIT_USER_SELECTED = '[ monitoring ] set droit user selected';
export const DELETE_MATIERE = '[ monitoring ] delete matiere';
export const SET_SPECIALITE_SELECTED = '[ monitoring ] set specialite selected';
export const SET_USER_SELECTED = '[ monitoring ] fetch user selected';
export const UNSET_DROIT_USER_SELECTED = '[ monitoring ] unset droit user selected';

export class SetDroitUserSelected implements Action {
    readonly type = SET_DROIT_USER_SELECTED;
    constructor(public payload: Droit ){}
};

export class UnsetDroitUserSelected implements Action {
    readonly type = UNSET_DROIT_USER_SELECTED;
    constructor(public payload: Droit ){}
};

export class DeleteMatiere implements Action {
    readonly type = DELETE_MATIERE;
    constructor(public payload: Donnee){}
};

export class SetSpecialiteSelected implements Action {
    readonly type = SET_SPECIALITE_SELECTED;
    constructor(public payload: Donnee ){}
};

export class SetUserSelected implements Action {
    readonly type = SET_USER_SELECTED;
    constructor(public payload: UserMonitor){}
};

export type MonitoringAction = 
FetchSpecialite |  
FetchSpecialiteSuccess | 
FetchDroit | 
FetchDroitSuccess |
FetchMatiere |
FetchMatiereSuccess |
FetchUser |
FetchUserSuccess |
FetchDroitUserSelected |
FetchDroitUserSelectedSuccess |
SetDroitUserSelected |
DeleteMatiere |
SetSpecialiteSelected |
SetUserSelected |
FetchShareLink |
FetchShareLinkSuccess |
JoinSpecialite;


