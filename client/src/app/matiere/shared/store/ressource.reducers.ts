import { typeRessource } from '../models/typeRessource.model';
import { ressource } from '../models/ressource.model';
import { RessourceFile } from '../models/ressourceFile.model';
import { RessourceAction, 
    FETCH_INIT_TYPE_RESSOURCE, 
    FETCH_INIT_TYPE_RESSOURCE_SUCCESS, 
    SET_TYPE_RESSOURCE,
    SET_RESSOURCE_SELECTED,
    FETCH_RESSOURCE_SUCCESS,
    FETCH_RESSOURCE_FILE_SUCCESS} from './ressource.actions';

export interface RessourceState {
    typeRessources: typeRessource[];
    ressources? : ressource[];
    typeRessourceSelected?: typeRessource;
    ressourceSelected?: ressource;
    fileRessourceSelected? : RessourceFile[]; 
}

export function RessourceReducer(state: RessourceState, action: RessourceAction): RessourceState {
    
    switch (action.type) {
        case FETCH_INIT_TYPE_RESSOURCE_SUCCESS: {
            return {
                ...state,
                typeRessources: action.payload
            }
        }
        case SET_TYPE_RESSOURCE : {
            return {
                ...state,
                typeRessourceSelected: action.payload
            }
        }
        case SET_RESSOURCE_SELECTED : {
            return {
                ...state,
                ressourceSelected: action.payload
            }
        }
        case FETCH_RESSOURCE_SUCCESS :
        return {
            ...state,
            ressources : action.payload
        }
        case FETCH_RESSOURCE_FILE_SUCCESS : 
        return {
            ...state,
            fileRessourceSelected : action.payload
        }
    }
    return state;
}