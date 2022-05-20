import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TraductorService } from '../../services/traductor.service';

@Component({
  selector: 'app-pagec',
  templateUrl: './pagec.component.html',
  styleUrls: ['./pagec.component.css']
})
export class PagecComponent implements OnInit {

  lenguaje!:string;
  lenguajes!:Array<string>;
  idioma1!:string;
  idioma2!:string;
  q!: string
  textoTraducido: string = "";
  
  traductorForm = new FormGroup({
    idioma: new FormControl(),
    idioma2: new FormControl()
 });

  constructor(private traductorService: TraductorService) {

    this.cargarLenguajes();
  }

  cargarLenguajes() {
    this.traductorService.getLanguages().subscribe(
      (result) => {
        //Convertimos los players recibidos en JSON a objetos JavScript
        this.lenguajes = new Array<string>();
        result['data'].forEach((element: any) => {
          this.lenguaje = "";
          Object.assign(this.lenguaje, element); //convertimos
          this.lenguajes.push(this.lenguaje);
        });
        console.log(this.lenguajes);
      },
      error => { alert("Error en la petición"); })
  }
  
  traducir(textoATraducir:string){
    /*let resultado = this.traductorService.postTranslate(this.options,this.options2,this.q);
    console.log("ya llego");      */

    
    this.idioma1 = this.traductorForm.get('idioma')?.value;
    this.idioma2 = this.traductorForm.get('idioma2')?.value;
    this.q = textoATraducir;

    if (this.idioma1 != null && this.idioma2 !=null){
      this.traductorService.postTranslate(this.idioma1,this.idioma2,this.q).subscribe(
      result => {
        
        this.textoTraducido = result.data.translations[0].translatedText;
        console.log(this.textoTraducido);
      },
      error =>{

      }
    )
    }
  }

  ngOnInit(): void {
  }
}
