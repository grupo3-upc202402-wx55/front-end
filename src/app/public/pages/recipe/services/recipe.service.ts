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
      name: 'Los Alamos recipe',
      ubication: 'Asia',
      product: 'Chicken',
      totalSurface: 150,
      price: 7500,
      images: ["/assets/recipe-1.png"],
      highlight1: 'Ecological recipe',
      highlight2: 'High production',
      highlight3: 'ISO certification',
      infrastructure: 'Modern facilities',
      recipeType: 'Poultry',
      service: 'Chicken sales',
      certifications: 'ISO 9001'
    },
    {
      id: 'recipe2',
      name: 'El Sol recipe',
      ubication: 'Arequipa',
      product: 'Cattle',
      totalSurface: 300,
      price: 12000,
      images: ["/assets/recipe-2.png"],
      highlight1: 'High quality livestock',
      highlight2: 'Innovative breeding techniques',
      highlight3: 'Organic certification',
      infrastructure: 'Wide pastures',
      recipeType: 'Livestock',
      service: 'Beef sales',
      certifications: 'Organic certification'
    },
    {
      id: 'recipe3',
      name: 'Green Valley recipe',
      ubication: 'Cusco',
      product: 'Sheep',
      totalSurface: 200,
      price: 8000,
      images: ["/assets/recipe-3.png"],
      highlight1: 'Free range sheep',
      highlight2: 'Sustainable practices',
      highlight3: 'Wool production',
      infrastructure: 'Natural grazing lands',
      recipeType: 'Sheep',
      service: 'Wool and mutton sales',
      certifications: 'Sustainable recipeing certification'
    },
    {
      id: 'recipe4',
      name: 'Blue Mountain recipe',
      ubication: 'Cusco',
      product: 'Alpaca',
      totalSurface: 250,
      price: 10000,
      images: ["/assets/recipe-4.png"],
      highlight1: 'Alpaca breeding',
      highlight2: 'High altitude recipeing',
      highlight3: 'Alpaca wool production',
      infrastructure: 'High altitude pastures',
      recipeType: 'Alpaca',
      service: 'Alpaca wool sales',
      certifications: 'High altitude recipeing certification'
    },
    {
      id: 'recipe5',
      name: 'River Side recipe',
      ubication: 'Ica',
      product: 'Pigs',
      totalSurface: 180,
      price: 7000,
      images: ["/assets/recipe-5.png"],
      highlight1: 'Pig recipeing',
      highlight2: 'River side location',
      highlight3: 'Pork production',
      infrastructure: 'Modern pig pens',
      recipeType: 'Pig',
      service: 'Pork sales',
      certifications: 'Pig recipeing certification'
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
