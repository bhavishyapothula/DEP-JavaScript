import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserService } from './user.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ActiveModule } from './active/active.module';
import { DeletedModule } from './deleted/deleted.module';
import { ManageModule } from './manage/manage.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ActiveModule,
    FormsModule,
    DeletedModule,
    ManageModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
