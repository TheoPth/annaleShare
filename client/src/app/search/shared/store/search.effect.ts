import { Injectable } from "@angular/core";
import { Action, Store, select} from  "@ngrx/store";
import { State } from "../../../shared/store";
import { switchMap, tap, debounceTime, map, withLatestFrom } from "rxjs/operators";
import { ofType, Effect, Actions } from "@ngrx/effects";
import { SearchAction,
    FETCH_POSSIBILITY,
    FetchPossibilitySuccess,
    SET_PARENT_SELECTION,
    FETCH_INIT_ECOLE,
    FETCH_SEARCH_POSSIBILITY,
    FETCH_SPECIALITIES_FROM_SPECIALITE,
    SetParentSelection,
    FETCH_ECOLE_PARENT,
    FetchEcoleParent,
    ADD_ECOLE,
    ADD_MATIERE,
    ADD_SPECIALITE,
    AddEcole,
    AddMatiere,
    AddSpecialite,
    FetchInitEcole,
    FetchSearchPossibility} from './search.actions';
import { SearchService } from "../services/search.service";
import { searchPossibility } from '../models/searchPossibility.model';
import { searchParentSelector } from "./search.selectors";
import { searchType } from "../models/searchType.enum";


@Injectable()
export class SearchEffects {

    @Effect()
    chercheLesPossibilitees$ = this.action$.pipe(
        ofType(FETCH_SEARCH_POSSIBILITY),
        switchMap ( () => {
            return this.store.pipe(select(searchParentSelector))
        }),
        switchMap ((search: searchPossibility) => {
            return this.searchService.getPossibility(search);
        }),
        map( (response: searchPossibility[]) => {
            return new FetchPossibilitySuccess(response);
        })
    )
    
    @Effect()
    initEcole$ = this.action$.pipe(
        ofType(FETCH_INIT_ECOLE),
        switchMap ((search: searchPossibility) => {
            return this.searchService.getEcole();
        }),
        map( (response: searchPossibility[]) => {
            return new FetchPossibilitySuccess(response);
        })
    )

    @Effect()
    fetchSpecialitiesFromSpecilite$ = this.action$.pipe(
        ofType(FETCH_SPECIALITIES_FROM_SPECIALITE),
        switchMap ((search: searchPossibility) => {
            return this.searchService.getAllSpecilitiesFromSpeciality(search);
        }),
        switchMap((response: searchPossibility[]) => {
            return [new FetchPossibilitySuccess(response),
            new FetchEcoleParent(response[0])];
        })
    )

    @Effect({dispatch: true})
    fetchEcoleParent$ = this.action$.pipe(
        ofType(FETCH_ECOLE_PARENT),
        switchMap ((search: searchPossibility) => {
            return this.searchService.getParent(search);
        }),
        map( (response: searchPossibility) => {
            return new SetParentSelection({id:1, wording :"", type :searchType.ECOLE});
        })
    )


    @Effect({dispatch: true})
    addPossibility$ = this.action$.pipe(
        ofType(ADD_ECOLE),
        switchMap ((nom : AddEcole) => {
            return this.searchService.addEcole(nom.payload);
        }), 
        map( () => {
            return new FetchInitEcole();
        })
    )

    @Effect({dispatch: false})
    addMatiere$ = this.action$.pipe(
        ofType(ADD_MATIERE),

        switchMap ((matiere : AddMatiere) => {
            return this.searchService.addMatiere(matiere.payload);
        }),
        map ( () => {
            return this.store.dispatch(new FetchSearchPossibility());
        })
       
    )
    @Effect({dispatch: false})
    addSpecialite$ = this.action$.pipe(
        ofType(ADD_SPECIALITE),
        switchMap ((specialite : AddSpecialite) => {
            return this.searchService.addSpecialite(specialite.payload);
        }),
        map ( () => {
            return this.store.dispatch(new FetchSearchPossibility());
        })
       
    )

    constructor (private action$: Actions, 
        private store: Store<State>,
        private searchService: SearchService) {}
}