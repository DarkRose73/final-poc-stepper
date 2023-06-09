import { Component, OnInit } from '@angular/core';
import { StepperService } from '../../services/stepper.service';

@Component({
  selector: 'stepper-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
})
export class StepperComponent implements OnInit {
  constructor(private stepperService: StepperService) {}

  ngOnInit(): void {
    throw new Error('Cargar pasos completados y paso actual');
  }
}
