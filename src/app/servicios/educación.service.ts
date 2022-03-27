import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educación } from '../interfaces/educación';

@Injectable({
  providedIn: 'root'
})
export class EducaciónService {

  constructor(private http: HttpClient,) { }

  private educaciónUrl = 'http://localhost:8080/educación'

  getEducaciones(): Observable<Educación[]> {
    return this.http.get<Educación[]>(this.educaciónUrl)   
  }

  addEducación(educacion:Educación): Observable<Educación>{
    return this.http.post<Educación>(this.educaciónUrl,educacion);
  }

  deleteEducación(id:number): Observable<Educación> {
    const url = `${this.educaciónUrl}/${id}`
    return this.http.delete<Educación>(url);
  }

  getEducación(id: number): Observable<Educación> {
    const url = `${this.educaciónUrl}/${id}`;
    return this.http.get<Educación>(url)
  }

  updateEducación(educacion:Educación): Observable<Educación> {
    const url = `${this.educaciónUrl}/${educacion.id}?titulo=${educacion.titulo}&lugar=${educacion.lugar}&duracion=${educacion.duracion}`;
    return this.http.put<Educación>(url,educacion) 
  }
}
