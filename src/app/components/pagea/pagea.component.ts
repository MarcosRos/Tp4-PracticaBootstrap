import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Pelicula } from 'src/app/models/pelicula';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-pagea',
  templateUrl: './pagea.component.html',
  styleUrls: ['./pagea.component.css']
})
export class PageaComponent implements OnInit {
  peliculas!: Array<Pelicula>;
  pelicula!: Pelicula;
  resultado: any;
  resultadoDetail: any;
  id:string ="";

  constructor(private peliculasService: PeliculasService) {
    this.peliculas = new Array<Pelicula>();
    this.pelicula = new Pelicula();
    //FilmAffinity
    //Me quede sin request por lo que opte buscar una API distinta a las proporcionadas en la catedra.

    /*
      this.obtenerDetalles("300113");
      this.obtenerDetalles("553533");
    */
    
    //Movie Database
    
    //con el fin de ahorrar requests directamente pongo algunos ids aqui, pero si quisiese buscarlo, se haria:
    /*
        this.obtenerPeliculas("NombreDeLaPelicula");
        this.obtenerPlot(this.id);
    */

    this.obtenerPlot("tt1877830");
    this.obtenerPlot("tt9419884");
    this.obtenerPlot("tt1630029");
    this.obtenerPlot("tt11138512");
    this.obtenerPlot("tt1745960");
   
   //  Solo puede realizar 5 requests por segundo, lo que limita la carga de peliculas
   // para solucionar esto llamo a una funcion que espera determinado tiempo antes de continuar
   // y alli agrego la pelicula, evitando que asi salga el cartel de error
    this.delay(1500)
    console.log("Exito")
   }


 obtenerPeliculas(aux:string){
    this.peliculasService.getPeliculas(aux).subscribe(
      (result) => { 
        this.resultado = result; 
        console.log(this.resultado);

        this.id= this.resultado.results[0].id;        
        this.id=this.id.substring(7,this.id.length-1);
        console.log(this.id);
    },
    error => { alert("Error en la petición"); })
  }

  obtenerPlot(id:string){
    this.peliculasService.getPlots(id).subscribe(
      (result) => { 
        this.resultado = result; 
        this.pelicula=new Pelicula();
        console.log(this.resultado);
        this.pelicula.titulo=this.resultado.base.title;
        this.pelicula.year=this.resultado.base.year;
        this.pelicula.img=this.resultado.base.image.url;
        this.pelicula.descripcion=this.resultado.plots[0].text;
        this.peliculas.push(this.pelicula);
    },
    error => { alert("Error en la petición"); })
  }




  /* Film Affinity  */
  obtenerPeliculasFilmAffinity(name:string){
    var idioma = "es";
    this.peliculasService.getPeliculasFilmAffinity(name,idioma).subscribe(
      (result) => { 
        this.resultado = result; 
        console.log(this.resultado);
        
      },
    error => { alert("Error en la petición"); })
  }

  obtenerDetalles(id:string){
    var idioma = "es";
    this.peliculasService.getDetail(id,idioma).subscribe(
      (result) => { 
        this.resultadoDetail = result; 
        console.log(this.resultadoDetail);

        this.pelicula.titulo=this.resultadoDetail.movie.title;
        console.log(this.pelicula.titulo)
        this.pelicula.img=this.resultadoDetail.movie.images[0];
        this.pelicula.year=this.resultadoDetail.movie.year;
        this.pelicula.descripcion= this.resultadoDetail.movie.excerpt;
        this.peliculas.push(this.pelicula);
      },
    error => { alert("Error en la petición"); })
  }
  
  async delay(ms: number) {
    await new Promise(f => setTimeout(f, 1500));
    this.obtenerPlot("tt13320622");
}

  ngOnInit(): void {
  }

}

