import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DivisaService } from '../../services/divisa.service';

@Component({
  selector: 'app-pageb',
  templateUrl: './pageb.component.html',
  styleUrls: ['./pageb.component.css']
})
export class PagebComponent implements OnInit {
  
  from: string="";
  to: string="";
  value!: string;
  arrayResultado!: Array<any>;
  resultado: string ="";
  objetoAux!: Object;
  calculo: string="";
  divisaForm = new FormGroup({
    from: new FormControl(),
    to: new FormControl(),
    resultado: new FormControl()
 });

  constructor(private divisaService: DivisaService) { 
}

  calcularCambioDivisa(value:string){
    this.from = this.divisaForm.get('from')?.value;
    this.to = this.divisaForm.get('to')?.value;
    this.value = value;

    if (this.from != null && this.to !=null){  
     this.divisaService.getConversor(this.from,this.to,this.value).subscribe(
      (result) => {
        const propertyValues = Object.values(result);
        //console.log(propertyValues[0]);
        this.divisaForm.controls['resultado'].setValue(propertyValues[0]);
      },
      error =>{ alert("Error en la petición"); })
    }
  }

  calcularCambioTabla(from:string, to:string){
    var valueAux ="1";
    this.divisaService.getConversor(from,to,valueAux).subscribe(
      (result) => {
        const propertyValues = Object.values(result);
        console.log(propertyValues[0]);
        this.calculo= propertyValues[0];
      },
      error =>{ alert("Error en la petición");
    })
    }

  ngOnInit(): void {
    
  }

}
