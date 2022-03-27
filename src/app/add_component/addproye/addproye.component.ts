import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProyectoClass } from 'src/app/clases/proyecto';
import { Proyecto } from 'src/app/interfaces/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-addproye',
  templateUrl: './addproye.component.html',
  styleUrls: ['./addproye.component.css']
})
export class AddproyeComponent implements OnInit {
  proyectos:Proyecto[]=[]

  constructor(
    private service:ProyectoService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  model = new ProyectoClass(0,'', '');

  onSubmit(values: any): void { 
    this.service.addProyecto(values).subscribe((proyecto)=> (
      this.proyectos.push(proyecto) 
    ))
    this.router.navigate(['informacion'])
  }

}
