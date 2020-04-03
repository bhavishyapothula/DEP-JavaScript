import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageCompComponent } from './manage-comp/manage-comp.component';
import { DetailsCompComponent } from './details-comp/details-comp.component';
import { Routes, RouterModule } from '@angular/router';
import { CombinePipe } from './combine.pipe';
const manageRoutes: Routes = [
  {
    path: '',
    component: ManageCompComponent,

    children: [{ path: ':id', component: DetailsCompComponent }]
  }
];

@NgModule({
  declarations: [ManageCompComponent, DetailsCompComponent, CombinePipe],
  imports: [CommonModule, RouterModule.forChild(manageRoutes)],
  exports: [ManageCompComponent, DetailsCompComponent]
})
export class ManageModule {}
