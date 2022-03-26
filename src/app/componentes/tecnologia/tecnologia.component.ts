import { Component, OnInit } from '@angular/core';
import { Tecnologia } from 'src/app/interfaces/tecnologia';
import { TecnologiaServiceService } from 'src/app/servicios/tecnologia-service.service';

@Component({
  selector: 'app-tecnologia',
  templateUrl: './tecnologia.component.html',
  styleUrls: ['./tecnologia.component.css']
})
export class TecnologiaComponent implements OnInit {
  tecnologias: Tecnologia[] = [];
  
  constructor(
    private tecnologiaService:TecnologiaServiceService,
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
