import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NumeroModule } from './numero/numero.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NumeroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
