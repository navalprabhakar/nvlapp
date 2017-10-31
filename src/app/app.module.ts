import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ResumeLiteComponent } from './resume-lite/resume-lite.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeLiteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
