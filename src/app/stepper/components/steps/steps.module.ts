import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Paso1Component } from './step1/pages/paso1/paso1.component';
import { Paso2Component } from './step2/pages/paso2/paso2.component';
import { Paso3Component } from './step3/pages/paso3/paso3.component';
import { Paso4Component } from './step4/pages/paso4/paso4.component';
import { Paso5Component } from './step5/pages/paso5/paso5.component';
import { Paso6Component } from './step6/pages/paso6/paso6.component';
import { Paso7Component } from './step7/pages/paso7/paso7.component';

@NgModule({
  declarations: [
    Paso1Component,
    Paso2Component,
    Paso3Component,
    Paso4Component,
    Paso5Component,
    Paso6Component,
    Paso7Component,
  ],
  imports: [CommonModule],
  exports: [
    Paso1Component,
    Paso2Component,
    Paso3Component,
    Paso4Component,
    Paso5Component,
    Paso6Component,
    Paso7Component,
  ],
})
export class StepsModule {}
