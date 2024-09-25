import { Routes } from '@angular/router';
import {StockManagementComponent} from "./inventory/pages/stock-management/stock-management.component";
import {OrderManagementComponent} from "./order/pages/order-management/order-management.component";
import { HomeComponent} from "./public/pages/home/home.component";
import {RecipeComponent} from "./recipe/components/recipe.component";
import {
  DescriptionsRecipesCardComponent
} from "./shared/components/descriptions-recipes-card/descriptions-recipes-card.component";
export const routes: Routes = [
  { path: 'stock', component: StockManagementComponent},
  { path : 'order', component: OrderManagementComponent},
  { path: 'recipe', component: RecipeComponent },
  {path: 'home', component: HomeComponent },
  { path: 'descriptions/:id', component: DescriptionsRecipesCardComponent },
];
