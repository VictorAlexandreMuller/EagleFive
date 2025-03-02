import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreinoRoutingModule } from './treino-routing.module';
import { TreinoComponent } from './treino/treino.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TreinoRoutingModule,
    TreinoComponent
  ]
})
export class TreinoModule { }
