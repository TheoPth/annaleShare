import { Action } from  "@ngrx/store";
import { searchPossibility } from "../models/searchPossibility.model";

export const FETCH_POSSIBILITY = '[ searchPossibility ] fetch possibility';
export const FETCH_POSSIBILITY_SUCCESS = '[ searchPossibility ] fetch possibility success';
export const SET_PARENT_SELECTION = '[ searchPossibility ] set parentSelection';
export const FETCH_SEARCH_POSSIBILITY = '[ searchPossibility ] fetch search possibility';
export const FETCH_INIT_ECOLE = '[ searchPossibility ] fetch init ecole';
export const FETCH_SPECIALITIES_FROM_SPECIALITE = '[ searchPossibility ] fetch specilite from specialite';
export const FETCH_ECOLE_PARENT = '[ searchPossibility ] fetch ecole parent';
export const SET_MATIERE_SELECTED = '[ searchPossibility ] set matiere selected';
export const ADD_ECOLE = '[ searchPossibility ] add ecole';
export const ADD_MATIERE = '[ searchPossibility ] add matiere';
export const ADD_SPECIALITE = '[ searchPossibility ] add spcecialite';

export class FetchSearchPossibility implements Action {
    readonly type = FETCH_SEARCH_POSSIBILITY;   
};

export class FetchPossibilitySuccess implements Action {
    readonly type = FETCH_POSSIBILITY_SUCCESS;
    constructor(public payload: searchPossibility[] ){}
};

export class SetParentSelection implements Action {
    readonly type = SET_PARENT_SELECTION;
    constructor(public payload: searchPossibility ){}
};

export class FetchInitEcole implements Action {
    readonly type = FETCH_INIT_ECOLE;
}

export class FetchSpecialitiesFromSpecialite implements Action {
    readonly type = FETCH_SPECIALITIES_FROM_SPECIALITE;
    constructor(public payload: searchPossibility) {}
}

export class FetchEcoleParent implements Action {
    readonly type = FETCH_ECOLE_PARENT;
    constructor(public payload: searchPossibility) {}
}

export class SetMatiereSelection implements Action {
    readonly type = SET_MATIERE_SELECTED;
    constructor(public payload: searchPossibility) {}
}

export class AddEcole {
    readonly type = ADD_ECOLE;
    constructor(public payload: string){}
}

export class AddSpecialite {
    readonly type = ADD_SPECIALITE;
    constructor(public payload: {nom : string, idEcole : number}){}
}


export class AddMatiere {
    readonly type = ADD_MATIERE;
    constructor(public payload: {nom : string, idSpecialite : number}){}
}

export type SearchAction = SetParentSelection  |  
FetchPossibilitySuccess | 
FetchSearchPossibility | 
FetchInitEcole |
FetchSpecialitiesFromSpecialite |
FetchEcoleParent |
SetMatiereSelection |
AddEcole |
AddSpecialite |
AddMatiere;

