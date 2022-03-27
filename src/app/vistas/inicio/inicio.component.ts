import { Component, OnInit, Input } from '@angular/core';
import { Persona } from 'src/app/interfaces/persona';
import { PersonaServiceService } from 'src/app/servicios/persona-service.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  personas:Persona[]=[]
  
  constructor(private personaService:PersonaServiceService) { }

  ngOnInit(): void {
    this.getPersonas()
  }

  getPersonas(): void {
    this.personaService.getPersonas()
    .subscribe(personas => this.personas = personas);
  }
}


