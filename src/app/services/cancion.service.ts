import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CancionService {

urlFinal:string="";
urlFinalEmbed:string="";

  constructor(private _http: HttpClient) { }

  public getCancion(q:string): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
      'X-RapidAPI-Key': '7ec67eb2d0msh43f92748b398b96p1ea4a3jsnefc96ab50089',
      }),
      }
      this.urlFinal="https://spotify23.p.rapidapi.com/search/?q="+q+"&type=tracks&offset=0&limit=1&numberOfTopResults=5";
    return this._http.get(this.urlFinal, httpOptions);
  }

  public getEmbed(link:string): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
    'X-RapidAPI-Host': 'oembed-parser.p.rapidapi.com',
		'X-RapidAPI-Key': '7ec67eb2d0msh43f92748b398b96p1ea4a3jsnefc96ab50089'
      }),
    }
    this.urlFinalEmbed="https://oembed-parser.p.rapidapi.com/oembed/parse?url="+link;

    return this._http.get(this.urlFinalEmbed, httpOptions);
  }





}
