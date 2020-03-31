import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ManualComponent } from './manual/manual.component';
import { SecondcliComponent } from './secondcli/secondcli.component';

@NgModule({
  declarations: [
    AppComponent,
    ManualComponent,
    SecondcliComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
