import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
url1:string ="https://online-movie-database.p.rapidapi.com/title/find?q=";
urlFinal:string ="";
  constructor(private _http: HttpClient) { }

  public getPeliculas(busqueda:string):Observable<any>{
    // petición por get a esa url de un api rest
    const httpOptions = {
    headers: new HttpHeaders({
    //"Accept-Encoding": "application/gzip",
		"X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
		"X-RapidAPI-Key": "7ec67eb2d0msh43f92748b398b96p1ea4a3jsnefc96ab50089"
    })
    };
    this.urlFinal=this.url1+busqueda;
    console.log(this.urlFinal);
    return this._http.get(this.urlFinal, httpOptions);
    }
}
