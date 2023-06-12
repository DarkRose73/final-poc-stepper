import { Component, EventEmitter, Output } from '@angular/core';
import { EstadoPaso } from 'src/app/stepper/interfaces/cache-store.interface';

@Component({
  selector: 'steps-paso3',
  templateUrl: './paso3.component.html',
  styleUrls: ['./paso3.component.css'],
})
export class Paso3Component {
  @Output() completado = new EventEmitter<EstadoPaso>();

  completarPaso() {
    this.completado.emit({ estado: true, paso: 2 });
  }
}
