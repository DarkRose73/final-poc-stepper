import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';
import { StepperService } from '../../services/stepper.service';
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { EstadoPaso } from '../../interfaces/cache-store.interface';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'stepper-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
})
export class StepperComponent implements OnInit {
  public pasosStepper = [false, false, false, false, false, false, false];
  public paso1Completado: boolean = false;
  public paso2Completado: boolean = true;
  public paso3Completado: boolean = false;
  public paso4Completado: boolean = false;
  public paso5Completado: boolean = false;
  public paso6Completado: boolean = false;
  public paso7Completado: boolean = false;

  constructor(private stepperService: StepperService) {}

  ngOnInit(): void {}

  cambioPaso(e: StepperSelectionEvent): void {
    console.log('Indice seleccionado ', e.previouslySelectedIndex);
    this.stepperService.completarPaso(e.previouslySelectedIndex, true);
  }

  completarPaso(estadoPaso: EstadoPaso) {
    this.paso1Completado = estadoPaso.estado;
    console.log(estadoPaso.estado);
  }

  reiniciarPasos() {
    this.stepperService.reiniciarPasos();
  }
}
