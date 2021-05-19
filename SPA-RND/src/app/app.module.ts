import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { QuicklinkModule } from 'ngx-quicklink';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
registerLocaleData(en);



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    QuicklinkModule,
    AppRoutingModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
