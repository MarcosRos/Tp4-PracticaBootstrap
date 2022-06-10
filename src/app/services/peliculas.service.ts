import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
urlFinal:string ="";
  constructor(private _http: HttpClient) { }

//USANDO ONLINE MOVIE DATABASE 500 REQUEST / MES

  public getPeliculas(busqueda:string):Observable<any>{
    const httpOptions = {
    headers: new HttpHeaders({
		"X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
		"X-RapidAPI-Key": "7ec67eb2d0msh43f92748b398b96p1ea4a3jsnefc96ab50089"
    })
    };
    this.urlFinal="https://online-movie-database.p.rapidapi.com/title/find?q="+busqueda;
    return this._http.get(this.urlFinal, httpOptions);
    }


  public getPlots(id:string):Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
      "X-RapidAPI-Key": "7ec67eb2d0msh43f92748b398b96p1ea4a3jsnefc96ab50089"
      })
      };
      this.urlFinal="https://online-movie-database.p.rapidapi.com/title/get-plots?tconst="+id;
      return this._http.get(this.urlFinal, httpOptions);
  }




    //USANDO FILM AFFINITY 25 REQUEST/DIA
    public getPeliculasFilmAffinity(name:string,idioma:string):Observable<any>{
      const httpOptions = {
        headers: new HttpHeaders({
        "X-RapidAPI-Host": "filmaffinity-unofficial.p.rapidapi.com",
        "X-RapidAPI-Key": "7ec67eb2d0msh43f92748b398b96p1ea4a3jsnefc96ab50089"
        })
        };
        this.urlFinal="https://filmaffinity-unofficial.p.rapidapi.com/movie/search/?query="+name+"&lang="+idioma;
        return this._http.get(this.urlFinal, httpOptions);
      }

      public getDetail(id:string, idioma:string): Observable<any>{
        const httpOptions = {
          headers: new HttpHeaders({
        "X-RapidAPI-Host": "filmaffinity-unofficial.p.rapidapi.com",
        "X-RapidAPI-Key": "7ec67eb2d0msh43f92748b398b96p1ea4a3jsnefc96ab50089"
      })
    };
        this.urlFinal="https://filmaffinity-unofficial.p.rapidapi.com/movie/detail/?lang="+idioma+"&id="+id;
      return this._http.get(this.urlFinal, httpOptions);
      }
}

