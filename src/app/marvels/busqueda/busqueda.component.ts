import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MarvelsService } from '../services/marvels.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent  {
@ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;
  constructor(private marvelService : MarvelsService) { }

  buscar(termino:string) {
    
    const valor = this.txtBuscar.nativeElement.value;
    if(valor.trim().length === 0){ 
      return;
    }


    this.marvelService.buscarMarvels(termino);
    this.txtBuscar.nativeElement.value = '';
    console.log(termino);
  }


}
