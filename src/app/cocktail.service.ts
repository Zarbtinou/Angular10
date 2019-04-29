import { Injectable } from '@angular/core';
import { Cocktail } from './cocktail'
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  private service: HttpClient;
  
  constructor(param_service: HttpClient) { 
    this.service = param_service;
    
    
  }

  public  getCocktails():Observable<Cocktail[]>{
    const obs1:Observable<any> = this.service.get("assets/Cocktails.json") ;
    const treatment = ( param_data:any) => {
    let tab:Cocktail[]=[];
    let treat=null;
    
    for(let j=0;j<param_data.length;j++){
      treat=param_data[j];
      tab.push(treat);
    }

    return tab;
    };

    return obs1.pipe( map(treatment) );
}
}
