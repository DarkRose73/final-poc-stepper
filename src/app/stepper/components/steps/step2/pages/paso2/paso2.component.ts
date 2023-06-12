import { Component, EventEmitter, Output } from '@angular/core';
import { EstadoPaso } from 'src/app/stepper/interfaces/cache-store.interface';

@Component({
  selector: 'steps-paso2',
  templateUrl: './paso2.component.html',
  styleUrls: ['./paso2.component.css'],
})
export class Paso2Component {
  @Output() completado = new EventEmitter<EstadoPaso>();

  completarPaso() {
    this.completado.emit({ estado: true, paso: 1 });
  }
}
