import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor( private http: HttpClient) { }

  url:string = 'https://datos.gob.es/apidata/catalog/distribution'


  getData(){

    return this.http.get(this.url);

  }


}
