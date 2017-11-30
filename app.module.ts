import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { PageNotFoundComponent } from './page-not-found.component';
//import { DashboardComponent } from './dashboard.component';
//import { OrderHistoryModule } from './order-history/order-history.module';
//import { OrdersModule } from './orders/orders.module';
import { CoreModule } from './common/core.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { DashboardModule } from './dashboard/dashboard.module';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    PageNotFoundComponent,
    
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //OrderHistoryModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent},
      //{ path: 'default', component: DefaultComponent },
      //{ path: 'default', component: OrdersModule },
      
      { path: '**', component: PageNotFoundComponent }

    ], { useHash: false }),
    //OrdersModule,
    CoreModule,
    DashboardModule
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
