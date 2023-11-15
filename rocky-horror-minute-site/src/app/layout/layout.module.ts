import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {
  HeaderComponent,
  FooterComponent,
  LayoutComponent
} from './components';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
  ],
  exports:[
    LayoutComponent
  ],
  providers: [],
})
export class LayoutModule { }
