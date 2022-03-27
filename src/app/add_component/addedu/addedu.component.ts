import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EducaciónClass } from 'src/app/clases/educación';
import { Educación } from 'src/app/interfaces/educación';
import { EducaciónService } from 'src/app/servicios/educación.service';

@Component({
  selector: 'app-addedu',
  templateUrl: './addedu.component.html',
  styleUrls: ['./addedu.component.css']
})
export class AddeduComponent implements OnInit {
  educaciones:Educación[]=[]

  constructor(
    private service:EducaciónService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  model = new EducaciónClass(0,'', '','');

  onSubmit(values: any): void { 
    this.service.addEducación(values).subscribe((educacion)=> (
      this.educaciones.push(educacion) 
    ))
    this.router.navigate(['informacion'])
  }

}
