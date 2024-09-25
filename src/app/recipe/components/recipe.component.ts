import { Component  } from '@angular/core';
import { Router } from '@angular/router';

import {MatCard, MatCardImage} from "@angular/material/card";
import {NgForOf, NgIf} from "@angular/common";
import {RecipeService} from "../services/recipe.service";


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  standalone: true,
  imports: [
    MatCard,
    MatCardImage,
    NgIf,
    NgForOf
  ],
  styleUrl: './recipe.component.css'
})
export class RecipeComponent {
  fileName: string = '';
  private incrementInterval: any;
  private decrementInterval: any;

  recipe = {
    name: '',
    ubication: '',
    infrastructure: '',
    recipeType: '',
    product: '',
    totalSurface: "" as any,
    service: '',
    certifications: '',
    condition: '',
    highlights: '',
    highlight1: '',
    highlight2: '',
    highlight3: '',
    price: "" as any,
    images: [] as string[]
  };

  constructor(private router: Router, private recipeService: RecipeService) { }

  save() {
    const highlights = this.recipe.highlights.split('\n');
    if (highlights.length < 1 || highlights.length > 3) {
      alert('Please enter between 1 and 3 highlights.');
      return;
    }
    this.recipe.highlight1 = highlights[0];
    this.recipe.highlight2 = highlights[1] || '';
    this.recipe.highlight3 = highlights[2] || '';

    // Pass the userRole when calling addRecipe
    this.recipeService.addRecipe(this.recipe, 'reciper');
    this.recipe = {
      name: '',
      ubication: '',
      infrastructure: '',
      recipeType: '',
      product: '',
      totalSurface: "" as any,
      service: '',
      certifications: '',
      condition: '',
      highlights: '',
      highlight1: '',
      highlight2: '',
      highlight3: '',
      price: "" as any,
      images: [] as string[]
    },

      this.router.navigate(['/home']);
  }

  onFileChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files[0]) {
      const file = target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.recipe.images.push(reader.result as string);
      };

      reader.readAsDataURL(file);
    }
  }




  startIncrement(event: Event) {
    event.preventDefault();
    let firstClick = true;
    this.incrementInterval = setInterval(() => {
      if (this.recipe.totalSurface < 500) {
        if (firstClick) {
          this.recipe.totalSurface++;
          firstClick = false;
        } else {
          this.recipe.totalSurface += 1;
        }
      }
    }, 50);
  }
  stopIncrement(event: Event) {
    event.preventDefault();
    clearInterval(this.incrementInterval);
  }

  startDecrement(event: Event) {
    event.preventDefault();
    let firstClick = true;
    this.decrementInterval = setInterval(() => {
      if (this.recipe.totalSurface > 1) {
        if (firstClick) {
          this.recipe.totalSurface--;
          firstClick = false;
        } else {
          this.recipe.totalSurface -= 1;
        }
      }
    }, 60);
  }

  stopDecrement(event: Event) {
    event.preventDefault();
    clearInterval(this.decrementInterval);
  }



}
