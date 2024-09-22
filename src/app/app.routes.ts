import { Routes } from '@angular/router';
import {StockManagementComponent} from "./re-grill/pages/stock-management/stock-management.component";
import {OrderManagementComponent} from "./order/pages/order-management/order-management.component";
export const routes: Routes = [
  { path: 'stock', component: StockManagementComponent},
  { path : 'order', component: OrderManagementComponent}
];
