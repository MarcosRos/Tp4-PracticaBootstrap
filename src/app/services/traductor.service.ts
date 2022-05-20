import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TraductorService {

  constructor(private _http: HttpClient) { }

  public getLanguages():Observable<any>{
    // petición por get a esa url de un api rest
    const httpOptions = {
    headers: new HttpHeaders({
    "Accept-Encoding": "application/gzip",
		"X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
		"X-RapidAPI-Key": "7ec67eb2d0msh43f92748b398b96p1ea4a3jsnefc96ab50089"
    })
    };
    return this._http.get("https://google-translate1.p.rapidapi.com/language/translate/v2/languages", httpOptions);
    }

    public postTranslate(lenguaje1:string,lenguaje2:string,text:string):Observable<any>{
      const httpOptions = {
      headers: new HttpHeaders({
      'content-type': 'application/x-www-form-urlencoded',
      "Accept-Encoding": "application/gzip",
      'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
      'X-RapidAPI-Key': '7ec67eb2d0msh43f92748b398b96p1ea4a3jsnefc96ab50089',
      }),
      }
      const body = new HttpParams()
      .set('q', text)
      .set('target', lenguaje2)
      .set('source', lenguaje1);
      
    
    return this._http.post("https://google-translate1.p.rapidapi.com/language/translate/v2",body, httpOptions);
    }
}
