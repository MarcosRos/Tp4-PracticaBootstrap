import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DivisaService {
  url1:string="https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have=";
  url2:string="&want=";
  url3:string="&amount=";
  urlFinal!:string;

  constructor(private _http: HttpClient) { }

  public getConversor(from:string, to:string, value:string){
    const httpOptions = {
      headers: new HttpHeaders({
      
      'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com',
      'X-RapidAPI-Key': '7ec67eb2d0msh43f92748b398b96p1ea4a3jsnefc96ab50089',
      }),
      }
      
      this.urlFinal= this.url1+from+this.url2+to+this.url3+value;

    return this._http.get(this.urlFinal, httpOptions);



  }
}
