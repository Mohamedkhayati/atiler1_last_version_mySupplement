import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SupplementService } from '../services/supplement.service';
import { Supplement } from '../model/supplement.model';
import { Categorie } from '../model/categorie.model';


@Component({
  selector: 'app-add-supplement',
  templateUrl: './add-supplement.component.html',
  
})
export class AddSupplementComponent implements OnInit {
  [x: string]: any;
  newSupplement = new Supplement();
  message? :String ;
  categories! : Categorie[];
newIdCat! : number;
newCategorie! : Categorie;


  constructor(private supplementService: SupplementService,
    private router :Router) { }  
    
    ngOnInit(): void {
    this.categories = this.supplementService.listeCategories();

    
  }
  addSupplement(){
    this.newCategorie =
    this.supplementService.consulterCategorie(this.newIdCat);
    this.newSupplement.categorie = this.newCategorie;
    this.supplementService.ajouterSupplement(this.newSupplement);
    this.router.navigate(['supplements']);
    this.message="done"
    
    }
}
