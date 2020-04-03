import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageCompComponent } from './manage-comp/manage-comp.component';
import { DetailsCompComponent } from './details-comp/details-comp.component';
import { Routes, RouterModule } from '@angular/router';
import { CombinePipe } from './combine.pipe';
import { CreateCompComponent } from './create-comp/create-comp.component';
import { EditCompComponent } from './edit-comp/edit-comp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const manageRoutes: Routes = [
    {
        path: '',
        component: ManageCompComponent,

        children: [
            { path: 'create', component: CreateCompComponent },
            { path: ':id', component: DetailsCompComponent },
            { path: 'edit/:id', component: EditCompComponent }
        ]
    }
];

@NgModule({
    declarations: [ManageCompComponent, DetailsCompComponent, CombinePipe, CreateCompComponent, EditCompComponent],
    imports: [CommonModule, RouterModule.forChild(manageRoutes), FormsModule, ReactiveFormsModule],
    exports: [ManageCompComponent, DetailsCompComponent, CreateCompComponent, EditCompComponent]
})
export class ManageModule {}
