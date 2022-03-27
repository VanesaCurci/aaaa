import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/interfaces/contacto';
import { ContactoService } from 'src/app/servicios/contacto.service';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  contactos:Contacto[]=[]

  constructor(private service:ContactoService) { }

  ngOnInit(): void {
    this.getContactos()
  }

  getContactos(): void {
    this.service.getContactos()
    .subscribe(contactos => this.contactos = contactos);
  }

}
