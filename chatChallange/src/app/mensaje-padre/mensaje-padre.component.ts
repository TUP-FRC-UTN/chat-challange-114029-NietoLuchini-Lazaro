import { Component, OnInit } from '@angular/core';
import { MensajeHijoComponent } from '../mensaje-hijo/mensaje-hijo.component';
import { Mensaje } from '../models/mensaje';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-mensaje-padre',
  standalone: true,
  imports: [MensajeHijoComponent,NgFor],
  templateUrl: './mensaje-padre.component.html',
  styleUrl: './mensaje-padre.component.css'
})
export class MensajePadreComponent implements OnInit {
  ngOnInit(): void {
    this.listMensajes.push({contenido:"Bienvenidos",emisor:"Chat"})
  }


  mensajeRecibido:string="";
  

  listMensajes:Mensaje[]=[];

  onMensajeRecibido(mensaje:Mensaje){
    this.listMensajes.push(mensaje);
    console.log(this.listMensajes);
  }

}
