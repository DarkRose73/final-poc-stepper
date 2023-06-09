import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Paso1Component } from './step1/pages/paso1/paso1.component';

@NgModule({
  declarations: [Paso1Component],
  imports: [CommonModule],
  exports: [Paso1Component],
})
export class StepsModule {}
