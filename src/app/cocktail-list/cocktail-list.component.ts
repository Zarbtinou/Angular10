import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { Cocktail } from '../cocktail';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {

  public cocktails : Cocktail[]=[];
  public param_Data:CocktailService;

  constructor(private myparam_service : CocktailService) { 
    this.param_Data=myparam_service;
  }

  ngOnInit() {
   this.myparam_service.getCocktails().subscribe(
    (paramData:Cocktail[])=>{
      this.cocktails=paramData;
    }


   )
  }

}
