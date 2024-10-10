import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { SupplementService } from '../services/supplement.service';
import { Supplement } from '../model/supplement.model';
import { Categorie } from '../model/categorie.model';


@Component({
  selector: 'app-update-supplement',
  templateUrl: './update-supplement.component.html',
  styleUrl: './update-supplement.component.css',
  styles: []
})
export class UpdateSupplementComponent implements OnInit {
  categories! : Categorie[];
updatedCatId! : number;


currentSupplement = new Supplement();
constructor(private activatedRoute: ActivatedRoute,
  private router :Router,
  private supplementService: SupplementService) { }
ngOnInit() {
  this.categories = this.supplementService.listeCategories();
  this.currentSupplement =
  this.supplementService.consulterSupplement(this.activatedRoute.snapshot.params['id']);
  this.updatedCatId=this.currentSupplement.categorie.idCat;
} 
updateSupplement() {
  this.currentSupplement.categorie=this.supplementService.consulterCategorie(this.updatedCatId);
  this.supplementService.updateSupplement(this.currentSupplement);
  this.router.navigate(['supplements']);
  }
}

