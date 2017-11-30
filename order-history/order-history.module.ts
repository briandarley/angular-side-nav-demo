import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { OrderHistoryComponent } from './order-history.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'history', component: OrderHistoryComponent }
    ])
  ],
  exports: [
    OrderHistoryComponent,


   

  ],
  declarations: [OrderHistoryComponent]
})
export class OrderHistoryModule { }
