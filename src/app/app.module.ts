import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NumRomComponent } from './num-rom/num-rom.component';

@NgModule({
  declarations: [
    AppComponent,
    NumRomComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ], exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
