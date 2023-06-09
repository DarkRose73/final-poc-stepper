import { Component, EventEmitter, Output } from '@angular/core';
import { EstadoPaso } from 'src/app/stepper/interfaces/cache-store.interface';

@Component({
  selector: 'steps-paso1',
  templateUrl: './paso1.component.html',
  styleUrls: ['./paso1.component.css'],
})
export class Paso1Component {
  @Output() completado = new EventEmitter<EstadoPaso>();

  completarPaso() {
    this.completado.emit({ estado: true, paso: 0 });
  }
}
