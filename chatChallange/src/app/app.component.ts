import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MensajePadreComponent } from './mensaje-padre/mensaje-padre.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MensajePadreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chatChallange';
}
