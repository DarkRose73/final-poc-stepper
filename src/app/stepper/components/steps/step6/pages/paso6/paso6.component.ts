import { Component, EventEmitter, Output } from '@angular/core';
import { EstadoPaso } from 'src/app/stepper/interfaces/cache-store.interface';

@Component({
  selector: 'steps-paso6',
  templateUrl: './paso6.component.html',
  styleUrls: ['./paso6.component.css'],
})
export class Paso6Component {
  @Output() completado = new EventEmitter<EstadoPaso>();

  completarPaso() {
    this.completado.emit({ estado: true, paso: 5 });
  }
}
