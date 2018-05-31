import { searchPossibility } from '../models/searchPossibility.model';
import { SET_PARENT_SELECTION, SearchAction, FETCH_POSSIBILITY_SUCCESS, SET_MATIERE_SELECTED } from './search.actions';
import { searchType } from '../models/searchType.enum';
export interface SearchState {
    possibility: searchPossibility[];
    parent? : searchPossibility;
    matiereSelected? : searchPossibility;
}

const initialState = {
    possibility: [{id : 1, wording : 'Polytech', type : searchType.ECOLE},
    {id : 2, wording : 'ParisSud', type : searchType.ECOLE}]
}

export function SearchReducer(state: SearchState = initialState, action: SearchAction): SearchState {
    switch (action.type) {
        case FETCH_POSSIBILITY_SUCCESS: {
            return {
                ...state,
                possibility: action.payload
            }
        }
        case SET_PARENT_SELECTION : {
            return {
                ...state,
                parent: action.payload
            }
        }

        case SET_MATIERE_SELECTED :  {
            return {
                ...state,
                matiereSelected : action.payload
            }
        }
    }
    return state;
}