import { searchType } from './searchType.enum';

export interface searchPossibility {
    id : number;
    wording : string;
    type : searchType;
}