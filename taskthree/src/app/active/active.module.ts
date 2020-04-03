import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveCompComponent } from './active-comp/active-comp.component';
import { ActiveUserPipe } from './active-user.pipe';

@NgModule({
    declarations: [ActiveCompComponent, ActiveUserPipe],
    imports: [CommonModule],
    exports: [ActiveCompComponent]
})
export class ActiveModule {}
