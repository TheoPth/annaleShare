import { Injectable } from "@angular/core";
import { Action, Store, select} from  "@ngrx/store";
import { State } from "../../../shared/store";
import { switchMap, tap, debounceTime, map, withLatestFrom } from "rxjs/operators";
import { ofType, Effect, Actions } from "@ngrx/effects";
import { SearchAction,
    ADD_ECOLE,
    ADD_MATIERE,
    ADD_SPECIALITE,
    AddEcole,
    AddMatiere,
    AddSpecialite,
    FETCH_ECOLES,
    FetchEcolesSuccess,
    FETCH_SPECIALITES,
    FETCH_MATIERES,
    FetchMatieresSuccess,
    FetchEcoles,
    FetchMatieres,
    FetchSpecialites,
    FetchSpecialitesSuccess,
    FETCH_DROIT,
    FetchDroitSuccess,
    FetchDroit,
    SET_SPECIALITE_SELECTED
} from './search.actions';
import { SearchService } from "../services/search.service";
import { searchPossibility } from '../models/searchPossibility.model';
import { searchType } from "../models/searchType.enum";
import { getMatiereSelectedSelector, getEcoleSelectedSelector, getSpecialiteSelectedSelector } from "./search.selectors";
import { Droit } from "../../../monitoring/shared/models/droit.model";


@Injectable()
export class SearchEffects {
    
    @Effect()
    fetchEcoles$ = this.action$.pipe(
        ofType(FETCH_ECOLES),
        switchMap ((search: searchPossibility) => {
            return this.searchService.getEcoles();
        }),
        map( (response: searchPossibility[]) => {
            return new FetchEcolesSuccess(response);
        })
    )

    @Effect()
    fetchSpecialites$ = this.action$.pipe(
        ofType(FETCH_SPECIALITES),
        withLatestFrom(this.store.pipe(select(getEcoleSelectedSelector))),
        switchMap (([action, ecole]  : [FetchSpecialites, searchPossibility]) => {
            return this.searchService.getSpecialites(ecole.id);
        }),
        map( (response: searchPossibility[]) => {
            return new FetchSpecialitesSuccess(response)
        })
    )

    @Effect()
    fetchMatieres$ = this.action$.pipe(
        ofType(FETCH_MATIERES),
        withLatestFrom(this.store.pipe(select(getSpecialiteSelectedSelector))),
        switchMap (([action, spe]  : [FetchSpecialites, searchPossibility]) => {
            return this.searchService.getMatieres(spe.id);
        }),
        map( (response: searchPossibility[]) => {
            return new FetchMatieresSuccess(response);
        })
    )


    @Effect()
    addEcole$ = this.action$.pipe(
        ofType(ADD_ECOLE),
        switchMap ((action : AddEcole) => {
            return this.searchService.addEcole(action.payload);
        }), 
        map( () => {
            return new FetchEcoles();
        })
    )

    @Effect()
    addMatiere$ = this.action$.pipe(
        ofType(ADD_MATIERE),
        withLatestFrom(this.store.pipe(select(getSpecialiteSelectedSelector))),
        switchMap (([action, ecole]  : [AddMatiere, searchPossibility])=> {
            return this.searchService.addMatiere(action.payload, ecole.id);
        }),
        map ( () => {
            return new FetchMatieres();
        })
    )

    @Effect()
    addSpecialite$ = this.action$.pipe(
        ofType(ADD_SPECIALITE),
        withLatestFrom(this.store.pipe(select(getEcoleSelectedSelector))),
        switchMap (([action, matiere]  : [AddSpecialite, searchPossibility]) => {
            return this.searchService.addSpecialite(action.payload, matiere.id);
        }),
        map ( () => {
            return new FetchSpecialites();
        })
    )

    @Effect()
    fetchDroit$ = this.action$.pipe(
        ofType(FETCH_DROIT),
        withLatestFrom(this.store.pipe(select(getSpecialiteSelectedSelector))),
        switchMap( ([action, spe] : [Action, searchPossibility]) => {
            return this.searchService.getDroitUserSpeSelected(spe.id);
        }),
        map( (droit: Droit[]) => {
            
            return new FetchDroitSuccess(droit);
        })
    )

    constructor (private action$: Actions, 
        private store: Store<State>,
        private searchService: SearchService) {}
}