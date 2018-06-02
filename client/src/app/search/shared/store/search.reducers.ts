import { searchPossibility } from '../models/searchPossibility.model';
import { SET_SPECIALITE_SELECTED, FETCH_ECOLES_SUCCESS, FETCH_SPECIALITES_SUCCESS, FETCH_MATIERES_SUCCESS, SET_ECOLE_SELECTED, SET_MATIERE_SELECTED, SearchAction, FETCH_DROIT_SUCCESS } from './search.actions';
import { searchType } from '../models/searchType.enum';
import { Droit } from '../../../monitoring/shared/models/droit.model';
export interface SearchState {
    ecoles : searchPossibility[];
    specialites: searchPossibility[];
    matieres: searchPossibility[];
    ecoleSelected : searchPossibility;
    matiereSelected : searchPossibility;
    specialiteSelected : searchPossibility;
    droitsSpeSelected : Droit[];
}

export function SearchReducer(state: SearchState, action: SearchAction): SearchState {
    switch (action.type) {
        case FETCH_ECOLES_SUCCESS: {
            return {
                ...state,
                ecoles: action.payload
            }
        }
        case FETCH_SPECIALITES_SUCCESS : {
            return {
                ...state,
                specialites: action.payload
            }
        }

        case FETCH_MATIERES_SUCCESS :  {
            return {
                ...state,
                matieres : action.payload
            }
        }

        case SET_ECOLE_SELECTED : {
            return {
                ...state,
                ecoleSelected: action.payload
            }
        }

        case SET_SPECIALITE_SELECTED :  {
            return {
                ...state,
                specialiteSelected : action.payload
            }
        }

        case SET_MATIERE_SELECTED :  {
            return {
                ...state,
                matiereSelected : action.payload
            }
        }

        case FETCH_DROIT_SUCCESS : {
            return {
                ...state,
                droitsSpeSelected : action.payload
            }

        }
    }
    return state;
}