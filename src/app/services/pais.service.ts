import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../models/pais';

const baseURL_Pais = "http://localhost:8090/rest/pais";

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http:HttpClient) {}

  listasPais():Observable<Pais[]> {
    return this.http.get<Pais[]>(baseURL_Pais + "/listaPaises");
  }

}
