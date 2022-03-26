import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/interfaces/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  proyectos:Proyecto[]=[]

  constructor(private service:ProyectoService) { }

  ngOnInit(): void {
    this.getProyectos()
  }

  getProyectos(): void {
    this.service.getProyectos()
    .subscribe(proyectos => this.proyectos = proyectos);
  }

  delete(proyecto:Proyecto): void {
    this.proyectos = this.proyectos.filter(t => t !== proyecto);
    this.service.deleteProyecto(proyecto.id).subscribe();
  }

}
