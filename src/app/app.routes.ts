import { Routes } from '@angular/router';
import {StockManagementComponent} from "./re-grill/pages/stock-management/stock-management.component";
import {OrderManagementComponent} from "./order/pages/order-management/order-management.component";
import {RecipeComponent} from "./public/pages/recipe/recipe.component";
export const routes: Routes = [
  { path: 'stock', component: StockManagementComponent},
  { path : 'order', component: OrderManagementComponent},
  { path: 'recipe', component: RecipeComponent },
];
