import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';

import { StepperComponent } from './pages/stepper/stepper.component';

@NgModule({
  declarations: [StepperComponent],
  imports: [
    CommonModule,
    MatStepperModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatIconModule,
  ],
  exports: [StepperComponent],
})
export class StepperModule {}
