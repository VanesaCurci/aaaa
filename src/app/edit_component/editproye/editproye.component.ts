import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Proyecto } from 'src/app/interfaces/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-editproye',
  templateUrl: './editproye.component.html',
  styleUrls: ['./editproye.component.css']
})
export class EditproyeComponent implements OnInit {
  proyecto:Proyecto | undefined;
  constructor(
    private route: ActivatedRoute,
    private service:ProyectoService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getProyecto();
  }
  getProyecto(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.service.getProyecto(id)
      .subscribe(proyecto => this.proyecto = proyecto);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.proyecto) {
      this.service.updateProyecto(this.proyecto)
        .subscribe(() => this.goBack());
    }
  }

}
