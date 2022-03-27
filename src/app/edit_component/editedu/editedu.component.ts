import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Educación } from 'src/app/interfaces/educación';
import { EducaciónService } from 'src/app/servicios/educación.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-editedu',
  templateUrl: './editedu.component.html',
  styleUrls: ['./editedu.component.css']
})
export class EditeduComponent implements OnInit {
  educacion:Educación | undefined

  constructor(
    private route: ActivatedRoute,
    private service:EducaciónService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getEducación();
  }

  getEducación(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.service.getEducación(id)
      .subscribe(educacion => this.educacion = educacion);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.educacion) {
      this.service.updateEducación(this.educacion)
        .subscribe(() => this.goBack());
    }
  }

}
