import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'stepper-components-botones-siguiente-cancelar',
  template: `<div
    style="display: flex; flex-direction: row; justify-content: space-between"
  >
    <button mat-button (click)="resetStepper()">Cancelar</button>
    <button mat-button matStepperNext>Siguiente</button>
  </div>`,
})
export class BotonesSiguienteCancelarComponent {
  @Output() reiniciarStepper = new EventEmitter<any>();

  resetStepper() {
    this.reiniciarStepper.emit();
  }
}
