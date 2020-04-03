import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeletedCompComponent } from './deleted-comp/deleted-comp.component';

@NgModule({
  declarations: [DeletedCompComponent],
  imports: [CommonModule],
  exports: [DeletedCompComponent]
})
export class DeletedModule {}
