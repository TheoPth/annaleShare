import { Action } from  "@ngrx/store";
import { searchPossibility } from "../models/searchPossibility.model";
import { Droit } from "../../../monitoring/shared/models/droit.model";



export const FETCH_ECOLES = '[ searchPossibility ] fetch ecoles';
export const FETCH_SPECIALITES = '[ searchPossibility ] fetch specialites';
export const FETCH_MATIERES = '[ searchPossibility ] fetch matieres';

export const FETCH_ECOLES_SUCCESS = '[ searchPossibility ] fetch ecoles success';
export const FETCH_SPECIALITES_SUCCESS = '[ searchPossibility ] fetch specialites success';
export const FETCH_MATIERES_SUCCESS = '[ searchPossibility ] fetch matieres success';

export const SET_ECOLE_SELECTED = '[ searchPossibility ] set parent selected';
export const SET_SPECIALITE_SELECTED = '[ searchPossibility ] set specialite selected';
export const SET_MATIERE_SELECTED = '[ searchPossibility ] set matiere selected';

export const ADD_ECOLE = '[ searchPossibility ] add ecole';
export const ADD_MATIERE = '[ searchPossibility ] add matiere';
export const ADD_SPECIALITE = '[ searchPossibility ] add spcecialite';

export const FETCH_DROIT = '[ searchPossibility ] fetch droit';
export const FETCH_DROIT_SUCCESS = '[ searchPossibility ] fetch droit success';

export class FetchEcoles implements Action {
    readonly type = FETCH_ECOLES; 
}

export class FetchSpecialites implements Action {
    readonly type = FETCH_SPECIALITES;
}

export class FetchMatieres implements Action {
    readonly type = FETCH_MATIERES;
}

export class FetchEcolesSuccess implements Action {
    readonly type = FETCH_ECOLES_SUCCESS;
    constructor(public payload: searchPossibility[]) {}
}

export class FetchSpecialitesSuccess implements Action {
    readonly type = FETCH_SPECIALITES_SUCCESS;
    constructor(public payload: searchPossibility[]) {}
}

export class FetchMatieresSuccess implements Action {
    readonly type = FETCH_MATIERES_SUCCESS;
    constructor(public payload: searchPossibility[]) {}
}

export class SetEcoleSelected implements Action {
    readonly type = SET_ECOLE_SELECTED;
    constructor(public payload: searchPossibility) {}
}

export class SetSpecialiteSelected implements Action {
    readonly type = SET_SPECIALITE_SELECTED;
    constructor(public payload: searchPossibility) {}
}

export class SetMatiereSelected implements Action {
    readonly type = SET_MATIERE_SELECTED;
    constructor(public payload: searchPossibility) {}
}

export class AddEcole {
    readonly type = ADD_ECOLE;
    constructor(public payload: string){}
}

export class AddSpecialite {
    readonly type = ADD_SPECIALITE;
    constructor(public payload: string){}
}

export class AddMatiere {
    readonly type = ADD_MATIERE;
    constructor(public payload: string){}
}


export class FetchDroit implements Action {
    readonly type = FETCH_DROIT;   
};

export class FetchDroitSuccess implements Action {
    readonly type = FETCH_DROIT_SUCCESS;
    constructor(public payload: Droit[] ){}
};

export type SearchAction = 
FetchEcoles  |  
FetchSpecialites | 
FetchMatieres | 
FetchEcolesSuccess |
FetchSpecialitesSuccess |
FetchMatieresSuccess |
SetEcoleSelected |
SetSpecialiteSelected |
SetMatiereSelected |
AddEcole |
AddSpecialite |
AddMatiere |
FetchDroit |
FetchDroitSuccess;

