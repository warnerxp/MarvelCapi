import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarvelspageComponent } from './marvelspage/marvelspage.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';



@NgModule({
  declarations: [
    MarvelspageComponent,
    BusquedaComponent,
    ResultadosComponent
  ],
  exports:[
    MarvelspageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MarvelsModule { }
