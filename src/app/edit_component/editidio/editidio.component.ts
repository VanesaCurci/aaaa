import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Idioma } from 'src/app/interfaces/idioma';
import { IdiomaService } from 'src/app/servicios/idioma.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-editidio',
  templateUrl: './editidio.component.html',
  styleUrls: ['./editidio.component.css']
})
export class EditidioComponent implements OnInit {
  idioma:Idioma | undefined;

  constructor(
    private route: ActivatedRoute,
    private service:IdiomaService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getIdioma();
  }

  getIdioma(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.service.getIdioma(id)
      .subscribe(idioma => this.idioma = idioma);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.idioma) {
      this.service.updateIdioma(this.idioma)
        .subscribe(() => this.goBack());
    }
  }

}
