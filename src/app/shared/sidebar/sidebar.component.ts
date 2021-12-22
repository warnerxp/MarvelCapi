import { Component, OnInit } from '@angular/core';
import { MarvelsService } from 'src/app/marvels/services/marvels.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {

  constructor(private marvelService : MarvelsService) { }

  get historial() {
    return this.marvelService.historial;
  }

  buscar(termino : string) {
    console.log(termino);
    this.marvelService.buscarMarvels(termino);
  }

}
