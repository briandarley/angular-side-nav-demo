import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "orders",component: OrdersComponent
      }])

  ],

  declarations: [OrdersComponent]
})
export class OrdersModule { }
