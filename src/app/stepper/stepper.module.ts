import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepxComponent } from './components/stepx/stepx.component';
import { Step1Component } from './components/step1/step1.component';

@NgModule({
  declarations: [
    StepxComponent,
    Step1Component
  ],
  imports: [CommonModule],
})
export class StepperModule {}
