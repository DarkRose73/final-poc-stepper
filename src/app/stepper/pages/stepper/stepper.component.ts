import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';
import { StepperService } from '../../services/stepper.service';
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { EstadoPaso } from '../../interfaces/cache-store.interface';
import { MatStepper } from '@angular/material/stepper';

const ESTADO_INICIAL_PASOS = [false, false, false, false, false, false, false];
const PASO_INICIAL = 0;

@Component({
  selector: 'stepper-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
})
export class StepperComponent implements OnInit {
  public pasosStepper = ESTADO_INICIAL_PASOS;
  public pasoInicial = PASO_INICIAL;

  constructor(private stepperService: StepperService) {}

  ngOnInit(): void {
    this.pasosStepper = [false, false, false, false, false, false, false];
    this.pasoInicial = 0;
  }

  cambioPaso(e: StepperSelectionEvent): void {
    console.log('Indice seleccionado ', e.previouslySelectedIndex);
    this.stepperService.completarPaso(e.previouslySelectedIndex, true);
  }

  completarPaso(estadoPaso: EstadoPaso) {
    this.pasosStepper[estadoPaso.paso] = estadoPaso.estado;
    console.log(this.pasosStepper);
  }

  reiniciarPasos() {
    this.stepperService.reiniciarPasos();
  }
}
