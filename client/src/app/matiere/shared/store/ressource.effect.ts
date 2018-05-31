import { Injectable } from "@angular/core";
import { Action, Store, select} from  "@ngrx/store";
import { State } from "../../../shared/store";
import { switchMap, tap, debounceTime, map } from "rxjs/operators";
import { ofType, Effect, Actions } from "@ngrx/effects";
import { FETCH_INIT_TYPE_RESSOURCE, FetchInitTypeRessourceSuccess, FETCH_RESSOURCE, FetchRessource, FetchRessourceSuccess, ADD_RESSOURCE, AjoutRessource, ADD_TYPE_RESSOURCE, AjoutTypeRessource, FetchInitTypeRessource, UPLOAD_FILE, UploadFile, FETCH_RESSOURCE_FILE, FetchRessourceFile, FetchRessourceFileSuccess } from "./ressource.actions";
import { typeRessource } from "../models/typeRessource.model";
import { MatiereService } from "../services/matiere.service";
import { searchMatiereSelected } from "../../../search/shared/store/search.selectors";
import { searchPossibility } from "../../../search/shared/models/searchPossibility.model";
import { ressourceSelectedSelector, ressourceTypeSelectedSelector } from "./ressource.selectors";
import { ressource } from "../models/ressource.model";
import { UploadFileRessource } from "../models/uploadFileRessource.model";
import { RessourceFile } from "../models/ressourceFile.model";


@Injectable()
export class RessourceEffects {

    @Effect()
    initRessourceType$ = this.action$.pipe(
        ofType(FETCH_INIT_TYPE_RESSOURCE),
        switchMap(() => {
            return this.store.pipe(select(searchMatiereSelected));
        }), 
        switchMap ((matiereSelected : searchPossibility) => {
            return this.matiereService.getTypeRessourceFromMatiere(matiereSelected);
        }),
        map( (response: typeRessource[]) => {
            return new FetchInitTypeRessourceSuccess(response);
        })
    )

    @Effect()
    fetchRessources$ = this.action$.pipe(
        ofType(FETCH_RESSOURCE),
        switchMap(() => {
            return this.store.pipe(select(ressourceTypeSelectedSelector));
        }), 
        switchMap ((ressourceTypeSelected : typeRessource) => {
            return this.matiereService.getRessourceFromTypeRessource(ressourceTypeSelected);
        }),
        map( (response: ressource[]) => {
            return new FetchRessourceSuccess(response);
        })
    )

    @Effect()
    ajoutRessource$ = this.action$.pipe(
        ofType(ADD_RESSOURCE), 
        switchMap ((action : AjoutRessource)=> {
            return this.matiereService.addRessource(action.payload);
        }),
        map( (response: ressource[]) => {
            return new FetchRessource();
        })
    )

    @Effect()
    ajoutTypeRessource$ = this.action$.pipe(
        ofType(ADD_TYPE_RESSOURCE), 
        switchMap ((action : AjoutTypeRessource)=> {
            return this.matiereService.addTypeRessource(action.payload);
        }),
        map( (response: ressource[]) => {
            return new FetchInitTypeRessource();
        })
    )

    @Effect({dispatch : false})
    uploadFile$ = this.action$.pipe(
        ofType(UPLOAD_FILE), 
        switchMap ((action : UploadFile)=> {
            return this.matiereService.uploadFile(action.payload);
        })
    )

    @Effect()
    fetchRessourceFile$ = this.action$.pipe(
        ofType(FETCH_RESSOURCE_FILE), 
        switchMap ((action : FetchRessourceFile) => {
            return this.matiereService.downloadRessourceFile(action.payload);
        }),
        map( (response: RessourceFile[]) => {
            return new FetchRessourceFileSuccess(response);
        })
    )



    constructor (private action$: Actions, 
        private store: Store<State>,
        private matiereService: MatiereService) {}
}