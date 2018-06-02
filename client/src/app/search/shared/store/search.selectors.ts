import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SearchState } from './search.reducers';

export const searchSelector = createFeatureSelector('search');
export const getEcolesSelector = createSelector(searchSelector, (searchState : SearchState) => {
    if (searchState) {
        return searchState.ecoles;
    } else {
        return null;
    }
});

export const getSpecialitesSelector = createSelector(searchSelector, (searchState: SearchState) => {
    if (searchState) {
        return searchState.specialites;
    } else {
        return null;
    }
})

export const getMatieresSelector = createSelector(searchSelector, (searchState: SearchState) => {
    if (searchState) {
        return searchState.matieres;
    } else {
        return null;
    }
})

export const getEcoleSelectedSelector = createSelector(searchSelector, (searchState: SearchState) => {
    if (searchState) {
        return searchState.ecoleSelected;
    } else {
        return null;
    }
})

export const getMatiereSelectedSelector = createSelector(searchSelector, (searchState: SearchState) => {
    if (searchState) {
        return searchState.matiereSelected;
    } else {
        return null;
    }
})

export const getSpecialiteSelectedSelector = createSelector(searchSelector, (searchState: SearchState) => {
    if (searchState) {
        return searchState.specialiteSelected;
    } else {
        return null;
    }
})

export const getDroitsSpeSelectedSelector = createSelector(searchSelector, (searchState: SearchState) => {
    if (searchState) {
        return searchState.droitsSpeSelected;
    } else {
        return null;
    }
})