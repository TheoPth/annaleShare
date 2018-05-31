import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RessourceState } from './ressource.reducers';

export const matiereSelector = createFeatureSelector('matiere');

export const ressourceSelectedSelector = createSelector(matiereSelector, (searchState : RessourceState) => {
    if (searchState) {
        return searchState.ressourceSelected;
    } else {
        return null;
    }
});

export const ressourceTypeSelectedSelector = createSelector(matiereSelector, (searchState: RessourceState) => {
    if (searchState) {
        return searchState.typeRessourceSelected;
    } else {
        return null;
    }
})

export const ressourceTypeSelector = createSelector(matiereSelector, (searchState: RessourceState) => {
    if (searchState) {
        return searchState.typeRessources;
    } else {
        return null;
    }
})

export const ressourceSelector = createSelector(matiereSelector, (searchState: RessourceState) => {
    if (searchState) {
        return searchState.ressources;
    } else {
        return null;
    }
})

export const ressourceFileSelector = createSelector(matiereSelector, (searchState: RessourceState) => {
    if (searchState) {
        return searchState.fileRessourceSelected;
    } else {
        return null;
    }
})