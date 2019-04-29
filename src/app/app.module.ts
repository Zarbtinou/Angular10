import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CocktailService } from './cocktail.service';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CocktailListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CocktailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
