import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';

import { StepperComponent } from './pages/stepper/stepper.component';
import { BotonesSiguienteCancelarComponent } from './components/botones-siguiente-cancelar/botones-siguiente-cancelar.component';
import { StepsModule } from './components/steps/steps.module';

@NgModule({
  declarations: [StepperComponent, BotonesSiguienteCancelarComponent],
  imports: [
    CommonModule,
    MatStepperModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatIconModule,
    StepsModule,
  ],
  exports: [StepperComponent],
})
export class StepperModule {}
