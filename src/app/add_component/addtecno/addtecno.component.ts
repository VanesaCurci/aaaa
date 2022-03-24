import { Component, OnInit, } from '@angular/core';
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

constructor(private service:TecnologiaServiceService){}
ngOnInit(): void {
}



  imagenes = ['html_logo.png', 'java_logo.jpg',
            'JavaScript-logo.jpg', 'logo_angular.jpg'];

  model = new Tecnología(0,'', '');

  submitted = false;

  onSubmit(values: any): void { this.submitted = true;
  console.log('Form values', values)
    this.service.addTecnologia(values).subscribe((tecnologia)=> (
      this.tecnologias.push(tecnologia)
    ))
  }
  
  

  }

  
