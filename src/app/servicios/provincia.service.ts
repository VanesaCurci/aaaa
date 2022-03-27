import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Provincia } from '../interfaces/provincia';

@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {

  constructor(private http:HttpClient) { }
  private provinciaUrl = 'http://localhost:8080/provincias';

  getProvincias(): Observable<Provincia[]> {
    return this.http.get<Provincia[]>(this.provinciaUrl)   
  }
}
