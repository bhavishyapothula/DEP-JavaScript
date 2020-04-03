import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeletedCompComponent } from './deleted-comp/deleted-comp.component';
import { PassiveUserPipe } from './passive-user.pipe';

@NgModule({
    declarations: [DeletedCompComponent, PassiveUserPipe],
    imports: [CommonModule],
    exports: [DeletedCompComponent]
})
export class DeletedModule {}
