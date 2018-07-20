import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoggerModule } from "./logger/logger.module";
import { ListComponent } from './list.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    LoggerModule.init({
        flag: true
        }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
