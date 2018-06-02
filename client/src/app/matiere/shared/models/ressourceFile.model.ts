import { TypeFile } from './typeFile.enum';

export interface RessourceFile {
    type : TypeFile;
    link : string;
    idRessource : number;
    name : string;
}