import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveCompComponent } from './active-comp/active-comp.component';

@NgModule({
  declarations: [ActiveCompComponent],
  imports: [CommonModule],
  exports: [ActiveCompComponent]
})
export class ActiveModule {}
