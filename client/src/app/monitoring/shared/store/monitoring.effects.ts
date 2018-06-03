import { Injectable } from "@angular/core";
import { Action, Store, select} from  "@ngrx/store";
import { State } from "../../../shared/store";
import { switchMap, tap, debounceTime, map, withLatestFrom } from "rxjs/operators";
import { ofType, Effect, Actions } from "@ngrx/effects";
import { FETCH_SPECIALITE, FetchSpecialiteSuccess, FetchDroitSuccess, FETCH_DROIT, FetchMatiereSuccess, DELETE_MATIERE, DeleteMatiere, FetchMatiere, FETCH_MATIERE, FETCH_USER, FetchUser, FetchUserSuccess, FETCH_DROIT_USER_SELECTED, FetchDroitUserSelected, FetchDroitUserSelectedSuccess, SET_DROIT_USER_SELECTED, UNSET_DROIT_USER_SELECTED, SetDroitUserSelected, FetchDroit, FETCH_SHARE_LINK, FetchShareLink, FETCH_SHARE_LINK_SUCCESS, FetchShareLinkSuccess, JOIN_SPECIALITE, JoinSpecialite } from "./monitoring.actions";
import { MonitoringService } from '../services/monitoring.service';
import { Donnee } from "../models/donnee.model";
import { Droit } from "../models/droit.model";
import { specialitesSelectedSelector, userSelectedSelector } from "./monitoring.selectors";
import { UserMonitor } from "../models/userMonitor.model";
import { User } from "../../../shared/models/user.model";

@Injectable()
export class MonitoringEffects {
    @Effect()
    chercheLesPossibilitees$ = this.action$.pipe(
        ofType(FETCH_SPECIALITE),
        switchMap (() => {
            return this.monitoringService.getSpecialitesUser();
        }),
        map( (spe: Donnee[]) => {
            return new FetchSpecialiteSuccess(spe);
        }) 
    )

    @Effect()
    fetchDroit$ = this.action$.pipe(
        ofType(FETCH_DROIT),
        withLatestFrom(this.store.pipe(select(specialitesSelectedSelector))),
        switchMap( ([action, spe] : [Action, Donnee]) => {
            
            return this.monitoringService.getDroitUser(spe.id);
        }),
        map( (droit: Droit[]) => {
            return new FetchDroitSuccess(droit);
        })
    )

    @Effect()
    fetchMatiere$ = this.action$.pipe(
        ofType(FETCH_MATIERE),
        withLatestFrom(this.store.pipe(select(specialitesSelectedSelector))),
        switchMap( ([action, spe] : [Action, Donnee]) => {
            return this.monitoringService.getMatiereFromSpe(spe.id);
        }),
        map( (droit: Donnee[]) => {
            return new FetchMatiereSuccess(droit);
        })
    )

    @Effect()
    supprMatiere$ = this.action$.pipe(
        ofType(DELETE_MATIERE),
        switchMap( (action : DeleteMatiere) => {
            return this.monitoringService.supprimerMatiere(action.payload.id);
        }),
        map( () => {
            return new FetchMatiere();
        })
    )

    @Effect()
    getUser$ = this.action$.pipe(
        ofType(FETCH_USER),
        withLatestFrom(this.store.pipe(select(specialitesSelectedSelector))),
        switchMap( ([action, spe] : [Action, Donnee]) => {
            return this.monitoringService.getUser(spe.id);
        }),
        map( (users : UserMonitor[]) => {
            return new FetchUserSuccess(users);
        })
    )

    @Effect()
    fetchDroituserselected$ = this.action$.pipe(
        ofType(FETCH_DROIT_USER_SELECTED),
        withLatestFrom(
            this.store.pipe(select(userSelectedSelector)),
            this.store.pipe(select(specialitesSelectedSelector))),
        switchMap( ([action, user, spe]) => {
            return this.monitoringService.getDroitUserSelected(spe.id, user.id);
        }),
        map( (droit : Droit[]) => {
            return new FetchDroitUserSelectedSuccess(droit);
        })
    )

    @Effect()
    setDroitUserSelected$ = this.action$.pipe(
        ofType(SET_DROIT_USER_SELECTED),
        withLatestFrom(
            this.store.pipe(select(userSelectedSelector)),
            this.store.pipe(select(specialitesSelectedSelector))),
        switchMap( ([action, user, spe] : [SetDroitUserSelected, UserMonitor, Donnee]) => {
            return this.monitoringService.setDroitUser(spe.id, user.id, action.payload.idDroit);
        }),
        switchMap( () => {
            return [new FetchDroitUserSelected(), new FetchDroit()];
        })
    )

    @Effect()
    unserDroitUserSelected$ = this.action$.pipe(
        ofType(UNSET_DROIT_USER_SELECTED),
        withLatestFrom(
            this.store.pipe(select(userSelectedSelector)),
            this.store.pipe(select(specialitesSelectedSelector))),
        switchMap( ([action, user, spe] : [SetDroitUserSelected, UserMonitor, Donnee]) => {
            return this.monitoringService.unsetDroitUser(spe.id, user.id, action.payload.idDroit);
        }),
        switchMap( () => {
            return [new FetchDroitUserSelected(), new FetchDroit()];
        })
    )

    @Effect()
    getShareLink$ = this.action$.pipe(
        ofType(FETCH_SHARE_LINK),
        withLatestFrom(
            this.store.pipe(select(specialitesSelectedSelector))),
        switchMap( ([action,spe] : [FetchShareLink, Donnee]) => {
            return this.monitoringService.getLienPartage(action.payload.idDroit, action.payload.temps, spe.id);
        }),
        map( (lien :string) => {
            return new FetchShareLinkSuccess(lien);
        })
    )

    @Effect()
    joinSpe$ = this.action$.pipe(
        ofType(JOIN_SPECIALITE),
        switchMap( (action: JoinSpecialite) => {
            return this.monitoringService.joinTeam(action.payload);
        }),
        map( (lien : string) => {
            return new FetchShareLinkSuccess(lien);
        })
    )

    constructor (private action$: Actions, 
        private store: Store<State>,
        private monitoringService: MonitoringService) {}
}