import { ActionReducerMap} from '@ngrx/store';
import { AuthState, authReducer } from './reducers/auth.reducer';
import { SearchState, SearchReducer } from '../../search/shared/store/search.reducers';
import { RessourceReducer, RessourceState } from '../../matiere/shared/store/ressource.reducers';
import { MatiereComponent } from '../../matiere/matiere/matiere.component';
import { MonitoringState, MonitoringReducer } from '../../monitoring/shared/store/monitoring.reducers';

/* Pour dire à quoi va ressembler le store, je vais galere pour mettre en place la  premiere interface
Ici on a une parti identification. Un user (qui sera dans le state). Son token. C'est tout pour le moment.
Il faut ajouter ce qu'on a besoin de gérer. Action qui va gérer l'erreur lors de la connection (bon mot de passe ou pas)
Une action qui va inscrire l'util. Si ca marche il faut renvoyer une erreur. Si ça marche il faut récupérer le user
Ici on va mettre tout ça dnas le meme reducer. (ce ,'est pas très complqiué askip)


Ici on défini uniquement la liste des reducers que l'on av définir plus tard

On déclare les fonctions là où on met les state. Un reducer = une fonction.
*/
export interface State {
    auth: AuthState;
    search: SearchState;
    matiere: RessourceState;
    monitoring: MonitoringState;
}


export const reducersMap: ActionReducerMap<State> = {
    auth: authReducer,
    search : SearchReducer,
    matiere : RessourceReducer,
    monitoring : MonitoringReducer,
}