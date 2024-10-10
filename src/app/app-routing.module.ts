import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplementsComponent } from './supplements/supplements.component';
import { AddSupplementComponent } from './add-supplement/add-supplement.component';
import { UpdateSupplementComponent } from './update-supplement/update-supplement.component';

const routes: Routes = [
  {path: "supplements", component : SupplementsComponent},
  {path: "add-supplement", component : AddSupplementComponent},
  {path: "updateSupplement/:id", component: UpdateSupplementComponent},
  { path: "", redirectTo: "supplements", pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
