import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { Tecnología } from 'src/app/clases/Tecnologia';
import { Tecnologia } from 'src/app/interfaces/tecnologia';
import { TecnologiaServiceService } from 'src/app/servicios/tecnologia-service.service';


@Component({
  selector: 'app-addtecno',
  templateUrl: './addtecno.component.html',
  styleUrls: ['./addtecno.component.css']
})
export class AddtecnoComponent implements OnInit{
tecnologias:Tecnologia[]=[]

constructor(
private service:TecnologiaServiceService, 
private router:Router
){}
ngOnInit(): void {
}

  imagenes = ['Angular.jpg', 'CSS.jpg','delfín.jpg','front-end.jpg','Github.jpg',
            'go.jpg', 'HTML.jpg','JavaScript.jpg','MySQL.jpg', 'phython.jpg',
             'postman.jpg', 'spring-jpg', 'SpringBoot.jpg'];

  model = new Tecnología(0,'', '');

  

  onSubmit(values: any): void { 
    this.service.addTecnologia(values).subscribe((tecnologia)=> (
      this.tecnologias.push(tecnologia) 
    ))
    this.router.navigate(['informacion'])
  }
  
  

  }
  
