import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const directives: any = [];

@NgModule({
  declarations: [...directives],
  imports: [
    CommonModule,

  ],
  exports: [...directives],
})
export class DirectivesModule { }

