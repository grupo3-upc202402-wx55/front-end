import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatToolbar} from "@angular/material/toolbar";
import {MatAnchor} from "@angular/material/button";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbar, MatAnchor, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'learning-center';
  protected options = [
    { path: '/stock', title: 'Inventory Manegement'},
    { path: '/about', title: 'Shrinkage Control'},
    { path: '/Billing', title: 'Billing'},
    { path: '/Orders ', title: 'Orders and Table'},
    { path: '/Report', title: 'Report and Statistics'},
    { path: '/Profile', title: 'Profile'}

  ]
}
