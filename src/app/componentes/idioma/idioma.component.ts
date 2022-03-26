import { Component, OnInit } from '@angular/core';
import { Idioma } from 'src/app/interfaces/idioma';
import { IdiomaService } from 'src/app/servicios/idioma.service';

@Component({
  selector: 'app-idioma',
  templateUrl: './idioma.component.html',
  styleUrls: ['./idioma.component.css']
})
export class IdiomaComponent implements OnInit {
  idiomas:Idioma[]=[]

  constructor(private service:IdiomaService) { }

  ngOnInit(): void {
    this.getIdiomas()
  }

  getIdiomas(): void {
    this.service.getIdiomas()
    .subscribe(idiomas => this.idiomas = idiomas);
  }

  delete(idioma:Idioma): void {
    this.idiomas = this.idiomas.filter(t => t !== idioma);
    this.service.deleteIdioma(idioma.id).subscribe();
  }

}
