import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {FooterComponent} from './component/footer/footer.Component';
import { from } from 'rxjs';
import {HeaderComponent} from './component/header/header.Component';
@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MDBBootstrapModule.forRoot(),
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MDBBootstrapModule
  ]
})
export class  SharedModule { }
