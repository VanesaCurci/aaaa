import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tecnologia } from 'src/app/interfaces/tecnologia';
import { TecnologiaServiceService } from 'src/app/servicios/tecnologia-service.service';

@Component({
  selector: 'app-tecnologia',
  templateUrl: './tecnologia.component.html',
  styleUrls: ['./tecnologia.component.css']
})
export class TecnologiaComponent implements OnInit {
  tecnologias: Tecnologia[] = [];
  tecnologia: Tecnologia | undefined;

  constructor(
    private tecnologiaService:TecnologiaServiceService,
    private router: Router,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.getTecnologias();
  }

  getTecnologias(): void {
    this.tecnologiaService.getTecnologias()
    .subscribe(tecnologias => this.tecnologias = tecnologias);
  }

  delete(tecnologia:Tecnologia): void {
    this.tecnologias = this.tecnologias.filter(t => t !== tecnologia);
    this.tecnologiaService.deleteTecnologia(tecnologia.id).subscribe();
  }

}
