import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TopbarComponent } from './topbar/topbar.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [TopbarComponent, SideNavComponent],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    RouterModule
  ],
  exports:[CommonModule,TopbarComponent,SideNavComponent,RouterModule]
})
export class SharedModule { }