import { createFeatureSelector, createSelector } from "@ngrx/store";
import { MonitoringState } from './monitoring.reducers';

export const moonitoringSelector = createFeatureSelector('monitoring');

export const specialitesSelector = createSelector(moonitoringSelector, (searchState : MonitoringState) => {
    if (searchState) {
        return searchState.specialites;
    } else {
        return null;
    }
});

export const specialitesSelectedSelector = createSelector(moonitoringSelector, (searchState : MonitoringState) => {
    if (searchState) {
        return searchState.specialiteSelected;
    } else {
        return null;
    }
});

export const droitsSelector = createSelector(moonitoringSelector, (searchState : MonitoringState) => {
    if (searchState) {
        return searchState.droits;
    } else {
        return null;
    }
});

export const matieresSelector = createSelector(moonitoringSelector, (searchState : MonitoringState) => {
    if (searchState) {
        return searchState.matieres;
    } else {
        return null;
    }
});

export const usersSelector = createSelector(moonitoringSelector, (searchState : MonitoringState) => {
    if (searchState) {
        return searchState.users;
    } else {
        return null;
    }
});

export const userSelectedSelector = createSelector(moonitoringSelector, (searchState : MonitoringState) => {
    if (searchState) {
        return searchState.userSelected;
    } else {
        return null;
    }
});

export const droitUserSelectedSelector = createSelector(moonitoringSelector, (searchState : MonitoringState) => {
    if (searchState) {
        return searchState.droitUserSelected;
    } else {
        return null;
    }
});

