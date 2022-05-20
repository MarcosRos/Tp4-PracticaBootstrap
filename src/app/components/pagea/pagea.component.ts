import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-pagea',
  templateUrl: './pagea.component.html',
  styleUrls: ['./pagea.component.css']
})
export class PageaComponent implements OnInit {
  peliculas!: Array<string>;
  pelicula!: string;

  constructor(private peliculasService: PeliculasService) {
    this.obtenerPeliculas("Back%20to%20the%20future");
   }


 obtenerPeliculas(aux:string){
   console.log("Entraste")
    this.peliculasService.getPeliculas(aux).subscribe(
      (result) => { 
        console.log("Service");

        result['results'].forEach((element: any) => {
          this.pelicula = "";
          Object.assign(this.pelicula, element); //convertimos
          this.peliculas.push(this.pelicula);


/*
        result['results'].forEach((element: any) =>{
          this.pelicula= new Pelicula();
          Object.assign(this.pelicula.titulo, element);
          this.peliculas.push(this.pelicula);
          console.log("Se cargo "+this.pelicula.titulo )*/
        });
        console.log("Holi "+this.peliculas);
        /*propertyValues;
        this.lenguajes = new Array<string>();
        result['data'].forEach((element: any) => {
          this.lenguaje = "";
          Object.assign(this.lenguaje, element); //convertimos
          this.lenguajes.push(this.lenguaje);
        console.log(propertyValues);*/

      },
    error => { console.log("Error wn xd ");/*alert("Error en la petición");*/ })
  }


  ngOnInit(): void {
  }

}

