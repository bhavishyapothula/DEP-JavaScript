import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ActiveCompComponent } from './active/active-comp/active-comp.component';
import { DeletedCompComponent } from './deleted/deleted-comp/deleted-comp.component';
import { ManageCompComponent } from './manage/manage-comp/manage-comp.component';
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'active', component: ActiveCompComponent },
    { path: 'deleted', component: DeletedCompComponent },
    {
        path: 'manage',

        loadChildren: () => import('./manage/manage.module').then(file => file.ManageModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
