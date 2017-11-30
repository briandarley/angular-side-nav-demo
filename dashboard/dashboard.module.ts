import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { OrdersModule } from "../orders/orders.module";


@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
        loadChildren: () => OrdersModule


      },
      {
        path: 'dashboard',
        component: DashboardComponent


      }
    ])
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
