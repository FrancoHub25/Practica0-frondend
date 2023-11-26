import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Marca } from '../models/marca';

const baseUrl = 'http://localhost:8090/rest/crudMarca';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  constructor(private http:HttpClient) { }

  listaMarca(filtro:String):Observable<Marca[]> {
      return this.http.get<Marca[]>(baseUrl + "/listaMarcaPorNombreLike/" + filtro);
  }

  registrarMarca(obj:Marca):Observable<any> {
      return this.http.post(baseUrl + "/registrarMarca", obj);
  }

  actualizarMarca(obj:Marca):Observable<any> {
      return this.http.put(baseUrl + "/actualizarMarca", obj);
  }

  eliminarMarca(id: any): Observable<any> {
      return this.http.delete(baseUrl + "/eliminarMarca/" + id);
  }

}
