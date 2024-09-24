import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatToolbar} from "@angular/material/toolbar";
import {MatAnchor, MatButton} from "@angular/material/button";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbar, MatAnchor, RouterLink, MatButton],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'learning-center';
  protected options = [
    { path: '/stock', title: 'Inventory Manegement'},
    { path: '/order', title: 'Orders and Table'},
    { path: '/home', title: 'Home'},
    { path: '/Orders ', title: 'Orders and Table'},
    { path: '/Report', title: 'Report and Statistics'},
    { path: '/Profile', title: 'Profile'},
    {path: '/dupes', title: 'Dupes Management' }

  ]
}
