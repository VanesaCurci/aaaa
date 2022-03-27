import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IdiomaClass } from 'src/app/clases/idioma';
import { Idioma } from 'src/app/interfaces/idioma';
import { IdiomaService } from 'src/app/servicios/idioma.service';

@Component({
  selector: 'app-addidio',
  templateUrl: './addidio.component.html',
  styleUrls: ['./addidio.component.css']
})
export class AddidioComponent implements OnInit {
  idiomas:Idioma[]=[]

  constructor(
    private service:IdiomaService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  niveles = [
  '0', '10', '20', '30', '40', '50',
  '60','70', '80', '90', '100',
   ];

  model = new IdiomaClass(0,'', 0);

  onSubmit(values: any): void { 
    this.service.addIdioma(values).subscribe((idioma)=> (
      this.idiomas.push(idioma) 
    ))
    this.router.navigate(['informacion'])
  }

}
