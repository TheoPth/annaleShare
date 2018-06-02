
import { Donnee } from "../models/donnee.model";
import { User } from "../models/user.model";
import { Droit } from "../models/droit.model";
import { FETCH_SPECIALITE_SUCCESS, SET_SPECIALITE_SELECTED, FETCH_DROIT_SUCCESS, FETCH_MATIERE_SUCCESS, FETCH_USER_SUCCESS, SET_USER_SELECTED, FETCH_DROIT_USER_SELECTED_SUCCESS, MonitoringAction } from "./monitoring.actions";
import { UserMonitor } from "../models/userMonitor.model";

export interface MonitoringState {
    specialites: Donnee[];
    specialiteSelected : Donnee;
    droits : Droit[];
    matieres : Donnee[];
    users : UserMonitor[];
    userSelected : UserMonitor;
    droitUserSelected : Droit[]; 
}

export function MonitoringReducer(state: MonitoringState, action: MonitoringAction): MonitoringState {
    switch (action.type) {
        case FETCH_SPECIALITE_SUCCESS : {
            return {
                ...state,
                specialites : action.payload
            }

        }
        case SET_SPECIALITE_SELECTED : {
            return {
                ...state,
                specialiteSelected : action.payload
            }

        }
        case FETCH_DROIT_SUCCESS : {
            return {
                ...state,
                droits : action.payload
            }

        }
        case FETCH_MATIERE_SUCCESS : {
            return {
                ...state,
                matieres : action.payload
            }

        }
        case FETCH_USER_SUCCESS : {
            return {
                ...state,
                users : action.payload
            }

        }
        case SET_USER_SELECTED : {
            return {
                ...state,
                userSelected : action.payload
            }

        }
        case FETCH_DROIT_USER_SELECTED_SUCCESS : {
            return {
                ...state,
                droitUserSelected : action.payload
            }

        }

        
    }

    return state;
};