import { HtmlParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CancionService } from 'src/app/services/cancion.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-paged',
  templateUrl: './paged.component.html',
  styleUrls: ['./paged.component.css']
})
export class PagedComponent implements OnInit {

  q:string="";
  id:string="";
  link:string="";
  iframe!:string;
  iframeSafe!:SafeUrl;
  /*iframePrueba:string='<iframe style="border-radius:12px" src="';
  iframePrueba2:string='" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>';*/
  cancionCargada:boolean=false;
  cancionForm = new FormGroup({
    cancion: new FormControl()
 });

  constructor(private cancionService: CancionService, private sanitizer: DomSanitizer) {
    
  }

  cargarCancion(){
    this.q=this.cancionForm.get('cancion')?.value;
    this.cancionService.getCancion(this.q).subscribe(
      (result) => {
        this.id=result.tracks.items[0].data.id;
        console.log(this.id)
        //en caso de que se opte por la primera opcion, explicada mas abajo el link debe asignarse:
        //this.link="https://open.spotify.com/embed/track/"+this.id;
        this.link="https://open.spotify.com/track/"+this.id;
        console.log(this.link);
        this.obtenerEmbed();
      },
      error =>{ alert("Error en la petición"); })
    }

    obtenerEmbed(){
    /* Existen dos maneras de obtener el embed, una es con la manera comentada, y la otra es haciendo uso de una segunda api
    la primera permite mas personalizacion ya que te permite elegir el tamaño de la caja en la que se muestra la cancion de

    this.iframe=this.iframePrueba+this.link+this.iframePrueba2;
    this.cancionCargada=true;
    this.iframeSafe=this.sanitizer.bypassSecurityTrustHtml(this.iframe);
    
    */
      this.cancionService.getEmbed(this.link).subscribe(
        (result) => {
          this.iframe=result.data.html;
          this.iframeSafe=this.sanitizer.bypassSecurityTrustHtml(this.iframe);
          console.log(this.iframe);
          this.cancionCargada=true;
        },
        error =>{ alert("Error en la petición"); })
    }

  ngOnInit(): void {
  }

}
