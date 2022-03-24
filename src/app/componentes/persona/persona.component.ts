import { Component, OnInit } from '@angular/core';
import { PersonaServiceService } from 'src/app/servicios/persona-service.service';
import { Persona } from 'src/app/interfaces/persona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  personas: Persona[]= []

  constructor(private personaService: PersonaServiceService) { }

  ngOnInit(): void {
    this.getPersonas()
  }

  getPersonas(): void {
    this.personaService.getPersonas()
    .subscribe(personas => this.personas = personas);
  }


}
