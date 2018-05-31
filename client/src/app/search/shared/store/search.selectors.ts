import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SearchState } from './search.reducers';

export const searchSelector = createFeatureSelector('search');
export const searchPossibilitySelector = createSelector(searchSelector, (searchState : SearchState) => {
    if (searchState) {
        return searchState.possibility;
    } else {
        return null;
    }
});

export const searchParentSelector = createSelector(searchSelector, (searchState: SearchState) => {
    if (searchState) {
        return searchState.parent;
    } else {
        return null;
    }
})

export const searchMatiereSelected = createSelector(searchSelector, (searchState: SearchState) => {
    if (searchState && searchState.matiereSelected) {
        return searchState.matiereSelected;
    } else {
        return null;
    }
})