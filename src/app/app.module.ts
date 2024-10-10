import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SupplementsComponent } from './supplements/supplements.component';
import { AddSupplementComponent } from './add-supplement/add-supplement.component';
import { FormsModule } from '@angular/forms';
import { UpdateSupplementComponent } from './update-supplement/update-supplement.component';

@NgModule({
  declarations: [
    AppComponent,
    SupplementsComponent,
    AddSupplementComponent,
    UpdateSupplementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
