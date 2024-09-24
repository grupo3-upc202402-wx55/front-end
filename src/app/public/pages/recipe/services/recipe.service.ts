import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private userRecipe: any[] = [];
  private recipes: any[] = [
    {
      id: 'recipe1',
      name: 'Pulpo a la gallega',
      price: 7500,
      images: ["/assets/recipe-1.png"],
      type: "main course"

    },
    {
      id: 'recipe2',
      name: 'Ceviche',
      price: 8000,
      images: ["/assets/recipe-2.png"],
      type: "main course"
    },
    {
      id: 'recipe3',
      name: 'Lomo saltado',
      price: 9000,
      images: ["/assets/recipe-3.png"],
      type: "main course"
    },
    {
      id: 'recipe4',
      name: 'Arroz con pollo',
      price: 8500,
      images: ["/assets/recipe-4.png"],
      type: "main course"
    },
    {
      id: 'recipe5',
      name: 'River Side recipe',
      price: 10000,
      images: ["/assets/recipe-5.png"],
      type: "main course"

    }

  ];
  private recipesSubject = new BehaviorSubject<any[]>(this.recipes);

  constructor() { }

  addRecipe(recipe: any, userRole: string) {
    const id = `recipe${this.userRecipe.length + 6}`;
    this.userRecipe.push({ ...recipe, id, addedBy: userRole });
    this.recipesSubject.next([...this.recipes, ...this.userRecipe]);
  }

  getUserRecipes(userRole: string) {
    return of(this.userRecipe);
  }

  getRecipes() {
    return this.recipesSubject.asObservable();
  }

  getRecipeById(id: string) {
    const recipe = [...this.recipes, ...this.userRecipe].find(recipe => recipe.id === id);
    console.log('getRecipeById called, found recipe:', recipe);// confirmation
    return of(recipe);
  }
}
