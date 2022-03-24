import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tecnologia',
  templateUrl: './tecnologia.component.html',
  styleUrls: ['./tecnologia.component.css']
})
export class TecnologiaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
edit(){
this.router.navigate(['addtecno'])
}
}
