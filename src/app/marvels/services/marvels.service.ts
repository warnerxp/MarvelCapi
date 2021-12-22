import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarvelsService {

  constructor(private http:HttpClient) { 

       
  this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  localStorage.getItem('historial');
  if(localStorage.getItem('historial')) {
    this._historial = JSON.parse(localStorage.getItem('historial')!);
  }

  }

  public resultados : any [] = [];
  private _historial:string[]=[];
  private apikey: string = '1836780a1533758da9b32e6a612386e9';
  private ts: string = '1000';
  private hash: string = '4be0340781fd0b4b2f5e5bc5dfbbe607';
  private   nameStartsWith : string = 'Cap';
  private servicioUrl = 'https://gateway.marvel.com:443/v1/public';
  
  
  get historial() {
    return[...this._historial];
  }

  buscarMarvels(query:string) {
    query = query.trim().toLocaleLowerCase();
    if (!this._historial.includes(query)){
     this._historial.unshift(query);
     this._historial = this._historial.splice(0,10);
     localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    const params = new HttpParams()
    .set('ts',this.ts)
    .set('nameStartsWith',query)
    .set('api_key',this.apikey)
    .set('hash',this.hash);

    this.http.get(`https://gateway.marvel.com:443/v1/public/characters?ts=1000&nameStartsWith=${query}&apikey=1836780a1533758da9b32e6a612386e9&hash=4be0340781fd0b4b2f5e5bc5dfbbe607` )
    .subscribe( ( resp: any ) => {
      console.log(resp.data.results);
      this.resultados = resp.data.results;
      localStorage.setItem('resultados', JSON.stringify(this.resultados));
    });

    //this.http.get(`${this.servicioUrl}/characters`,{params})
    //.subscribe( ( resp: any ) => {
     // console.log(resp.data.results);
      //this.resultados = resp.data.results;
      //localStorage.setItem('resultados', JSON.stringify(this.resultados));
    //});




    
  }
}
