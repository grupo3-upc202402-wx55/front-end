import {Component, OnInit} from '@angular/core';
import {MatCard, MatCardImage} from "@angular/material/card";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [
    MatCard,
    MatCardImage,
    NgForOf,
    NgIf
  ],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent  {
  recipes: any;


}
