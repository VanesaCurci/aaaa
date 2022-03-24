import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { Observable,  } from 'rxjs';

import { Tecnologia } from '../interfaces/tecnologia';

@Injectable({
  providedIn: 'root'
})
export class TecnologiaServiceService {
  

  constructor(private http: HttpClient,) { }

  private tecnologiaUrl = 'http://localhost:8080/tecnologías'

  getTecnologias(): Observable<Tecnologia[]> {
    return this.http.get<Tecnologia[]>(this.tecnologiaUrl)   
  }

  addTecnologia(tecnologia:Tecnologia): Observable<Tecnologia>{
    return this.http.post<Tecnologia>(this.tecnologiaUrl,tecnologia);
  }

  deleteTecnologia(tecnologia:Tecnologia): Observable<Tecnologia> {
    const url = `${this.tecnologiaUrl}/borrar/${tecnologia.id}`
    return this.http.delete<Tecnologia>(url);
  }

  

}




  

