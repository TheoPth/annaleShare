import { Action } from  "@ngrx/store";
import { typeRessource } from "../models/typeRessource.model";
import { ressource } from "../models/ressource.model";
import { RessourceFile } from "../models/ressourceFile.model";
import{ UploadFileRessource } from '../models/uploadFileRessource.model';

export const FETCH_RESSOURCE = '[ matiere ] fetch possibility';
export const FETCH_RESSOURCE_SUCCESS = '[ matiere ] fetch ressource success'
export const FETCH_INIT_TYPE_RESSOURCE = '[ matiere ] fetch init type ressource';
export const FETCH_INIT_TYPE_RESSOURCE_SUCCESS = '[ matiere ] fetch init type ressource success';
export const SET_TYPE_RESSOURCE = '[ matiere ] set type ressource';
export const SET_RESSOURCE_SELECTED = '[ matiere] set ressource selected';
export const ADD_RESSOURCE = '[ matiere ] add ressource';
export const ADD_TYPE_RESSOURCE = '[ matiere ] add type ressource';
export const UPLOAD_FILE = '[ matiere ] upload file';
export const FETCH_RESSOURCE_FILE = '[ matiere ] fetch ressource file';
export const FETCH_RESSOURCE_FILE_SUCCESS = '[ matiere ]  fetch ressource file success';
export const DELETE_FILE = '[ matiere ] delete file';


export class FetchRessource implements Action {
    readonly type = FETCH_RESSOURCE;  
};

export class SetTypeRessource implements Action {
    readonly type = SET_TYPE_RESSOURCE;
    constructor (public payload: typeRessource){};
};

export class FetchInitTypeRessource implements Action {
    readonly type = FETCH_INIT_TYPE_RESSOURCE;
}

export class FetchInitTypeRessourceSuccess implements Action {
    readonly type = FETCH_INIT_TYPE_RESSOURCE_SUCCESS;
    constructor (public payload: typeRessource[]){};
}

export class SetRessourceSelected implements Action {
    readonly type = SET_RESSOURCE_SELECTED;
    constructor (public payload: ressource){};
}

export class FetchRessourceSuccess {
    readonly type = FETCH_RESSOURCE_SUCCESS;
    constructor(public payload: ressource[]) {}
}

export class AjoutRessource {
    readonly type = ADD_RESSOURCE;
    constructor(public payload: ressource) {}
}

export class AjoutTypeRessource {
    readonly type = ADD_TYPE_RESSOURCE;
    constructor(public payload: typeRessource) {}
}

export class UploadFile {
    readonly type = UPLOAD_FILE;
    constructor(public payload: UploadFileRessource) {}
}

export class FetchRessourceFile {
    readonly type = FETCH_RESSOURCE_FILE;
    constructor(public payload: number) {}
}

export class FetchRessourceFileSuccess {
    readonly type = FETCH_RESSOURCE_FILE_SUCCESS;
    constructor(public payload: RessourceFile[]) {}
}

export class DeleteFile {
    readonly type = DELETE_FILE;
    constructor(public payload: RessourceFile){}
}


export type RessourceAction =
FetchInitTypeRessourceSuccess |
FetchRessource |
SetTypeRessource |
FetchInitTypeRessource |
SetRessourceSelected |
FetchRessourceSuccess |
AjoutRessource |
AjoutTypeRessource |
UploadFile |
FetchRessourceFile |
FetchRessourceFileSuccess;
