import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesModule } from '../directives/directives.module';

const components: any = [];
@NgModule({
  declarations: [...components,],
  imports: [
    CommonModule,
    DirectivesModule,
  ],
  exports: [...components,],
})
export class ComponentsModule { }

