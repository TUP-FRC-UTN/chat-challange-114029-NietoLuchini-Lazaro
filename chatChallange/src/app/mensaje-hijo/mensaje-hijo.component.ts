import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Mensaje } from '../models/mensaje';

@Component({
  selector: 'app-mensaje-hijo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './mensaje-hijo.component.html',
  styleUrl: './mensaje-hijo.component.css'
})
export class MensajeHijoComponent {


  @Input() usuario:string="";

  mensaje:string="";

  guardarMsj(){

  const nuevoMensaje:Mensaje={
    contenido:this.mensaje,
    emisor:this.usuario
  };

  this.mensajeEnviado.emit(nuevoMensaje);

  }


  @Output() mensajeEnviado = new  EventEmitter<Mensaje>();


}
