import { Component, EventEmitter, Output } from '@angular/core';
import { EstadoPaso } from 'src/app/stepper/interfaces/cache-store.interface';

@Component({
  selector: 'steps-paso4',
  templateUrl: './paso4.component.html',
  styleUrls: ['./paso4.component.css'],
})
export class Paso4Component {
  @Output() completado = new EventEmitter<EstadoPaso>();

  completarPaso() {
    this.completado.emit({ estado: true, paso: 3 });
  }
}
