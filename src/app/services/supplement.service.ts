import { Injectable } from '@angular/core';
import { Supplement } from '../model/supplement.model';
import { Categorie } from '../model/categorie.model';


@Injectable({
  providedIn: 'root'
  })
  
export class SupplementService {
  supplements : Supplement[];
  supplement! : Supplement;
  categories: { idCat: number; nomCat: string; }[];

  constructor() {
    this.categories = [ {idCat : 1, nomCat : "creatine"},
  {idCat : 2, nomCat : "Protein"}];
this.supplements = [
{ idSupplement : 1, nomSupplement : "Creatine Monohydrate", prixSupplement :120,dosageSupplement :5,
dateCreation : new Date("01/14/1990"), categorie : {idCat : 1, nomCat : "creatine"}},
{ idSupplement : 2, nomSupplement : "Creatine HCL ", prixSupplement : 150,dosageSupplement :2,
dateCreation : new Date("12/17/2010"), categorie : {idCat : 2, nomCat : "Creatine"}},
{ idSupplement : 3, nomSupplement :"Whey Protein Isolate", prixSupplement : 200,dosageSupplement :30,
dateCreation : new Date("02/20/1970"),categorie : {idCat : 1, nomCat : "Protein"}}
];


   }
   listeSupplements():Supplement[] {
    return this.supplements;
}
ajouterSupplement( supplement: Supplement){
  this.supplements.push(supplement);
  }
supprimerSupplement( supp: Supplement){
    const index = this.supplements.indexOf(supp, 0);
    if (index > -1) {
    this.supplements.splice(index, 1);
    }
    }
  consulterSupplement(id:number): Supplement{
      this.supplement = this.supplements.find(p => p.idSupplement == id)!;
      return this.supplement;
      }
      
trierSupplements(){
        this.supplements = this.supplements.sort((n1,n2) => {
        if (n1.idSupplement! > n2.idSupplement!) {
        return 1;
        }
        if (n1.idSupplement! < n2.idSupplement!) {
        return -1;
        }
        return 0;
        });
        }
updateSupplement(s:Supplement)
        {
        // console.log(s);
        this.supprimerSupplement(s);
        this.ajouterSupplement(s);
        this.trierSupplements();
        }
listeCategories():Categorie[] {
    return this.categories;
          }   
  consulterCategorie(id:number): Categorie{
            return this.categories.find(cat => cat.idCat == id)!;
            }

}
