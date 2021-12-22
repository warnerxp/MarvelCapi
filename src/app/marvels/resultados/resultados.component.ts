import { Component, OnInit } from '@angular/core';
import { MarvelsService } from '../services/marvels.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent {

  constructor(private marvelService: MarvelsService) { }

  get resultados() {
    return this.marvelService.resultados;
  }
 

}
