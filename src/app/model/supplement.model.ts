import { Categorie } from "./categorie.model";

export class Supplement {
    idSupplement? : number;
    nomSupplement? : string;
    prixSupplement? : number;
    dosageSupplement? : number;
    dateCreation? : Date ;
    categorie! : Categorie;

    }
    