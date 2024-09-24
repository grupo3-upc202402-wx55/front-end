import { Component, OnInit } from '@angular/core';
import {RecipeService} from "../../public/pages/recipe/services/recipe.service";
import { Router } from '@angular/router';
import {MatCard, MatCardImage} from "@angular/material/card";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [
    MatCard,
    NgIf,
    NgForOf,
    MatCardImage
  ],
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  recipes: any;
  userRole: any;
  userRecipes: any;
  searchProduct: string = '';
  searchUbication: string = '';
  allRecipes: any;
  uniqueProducts: string[] = [];
  uniqueUbications: string[] = [];
  constructor( private router: Router, private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.getRecipeData();
    this.getUserRecipes();
    this.getUniqueProducts();
    this.getUniqueUbications();
  }

  getUserRecipes(): void {
    this.recipeService.getUserRecipes(this.userRole).subscribe((data: any) => {
      this.userRecipes = data;
      console.log(this.userRecipes);
    });
  }



  getRecipeData(): void {
    this.recipeService.getRecipes().subscribe((data: any) => {
      this.allRecipes = data.map((recipe: any, index: number) => {
        return { ...recipe, id: `recipe${index + 1}` };
      });
      this.recipes = [...this.allRecipes]; // Inicializa las granjas con todas las granjas
      console.log(this.recipes);
    });
  }

  navigateToDescriptions(id: string): void {
    if (id) {
      this.router.navigate(['/descriptions', id]);
    } else {
      console.error('No recipe ID was provided');
    }
  }

  navigateToDescriptionsUndefined(id: string): void {
    if (id === 'recipe6' || id === 'recipe7' || id === 'recipe8') {
      alert('If you want to enjoy all the content, you need to register or log in');
      this.router.navigate(['/login']);
    } else if (id) {
      this.router.navigate(['/descriptions', id]);
    } else {
      console.error('No recipe ID was provided');
    }
  }

  searchRecipes(): void {
    if (!this.searchProduct && !this.searchUbication) {
      this.recipes = [...this.allRecipes];
      this.userRecipes = [...this.allRecipes];
      return;
    }

    const filterFunction = (fieldValue: string, searchValue: string) => {
      return !searchValue || fieldValue.toLowerCase().includes(searchValue.toLowerCase());
    };

    this.recipes = this.allRecipes.filter((recipe: any) => {
      return filterFunction(recipe.product, this.searchProduct) && filterFunction(recipe.ubication, this.searchUbication);
    });

    this.userRecipes = this.recipes;
  }
  getUniqueProducts(): void {
    this.recipeService.getRecipes().subscribe((data: any[]) => {
      this.uniqueProducts = [...new Set(data.map((recipe: { product: string }) => recipe.product))];
    });
  }
  getUniqueUbications(): void {
    this.recipeService.getRecipes().subscribe((data: any[]) => {
      this.uniqueUbications = [...new Set(data.map((recipe: { ubication: string }) => recipe.ubication))];
    });
  }
}
