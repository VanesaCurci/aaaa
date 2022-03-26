import { Component, OnInit } from '@angular/core';
import { Educación } from 'src/app/interfaces/educación';
import { EducaciónService } from 'src/app/servicios/educación.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educaciones:Educación[]=[]

  constructor(private service:EducaciónService) { }

  ngOnInit(): void {
    this.getEducaciones()
  }

  getEducaciones(): void {
    this.service.getEducaciones()
    .subscribe(educaciones => this.educaciones = educaciones);
  }

  delete(educacion:Educación): void {
    this.educaciones = this.educaciones.filter(t => t !== educacion);
    this.service.deleteEducación(educacion.id).subscribe();
  }
}
