import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplyRoutingModule } from './apply-routing.module';
import { ApplyComponent } from './apply.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [ApplyComponent, DashboardComponent],
  imports: [
    CommonModule,
    ApplyRoutingModule
  ]
})
export class ApplyModule { }
