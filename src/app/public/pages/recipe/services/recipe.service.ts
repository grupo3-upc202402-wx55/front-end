import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private userRecipes: any[] = [];

  private recipes: any[] = [
    {
      id: 'recipe1',
      name: 'Chicken Tacos',
      ingredients: ['Chicken', 'Tortillas', 'Tomato', 'Onion', 'Cilantro', 'Lime', 'Salt', 'Pepper'],
      steps: ['Cook the chicken', 'Chop the vegetables', 'Assemble the tacos'],
      images: ["/assets/farm-1.png"],
      difficulty: 'Easy',
      time: '30 minutes',
      servings: 4,


    },
    {
      id: 'recipe2',
      name: 'Beef Stew',
      ingredients: ['Beef', 'Potatoes', 'Carrots', 'Onion', 'Garlic', 'Tomato', 'Beef broth', 'Salt', 'Pepper'],
      steps: ['Brown the beef', 'Cook the vegetables', 'Simmer the stew'],
      images: '/assets/recipe-2.png',
      difficulty: 'Medium',
      time: '2 hours',
      servings: 6,

    },
    {
      id: 'recipe3',
      name: 'Vegetable Stir Fry',
      ingredients: ['Broccoli', 'Carrots', 'Bell pepper', 'Onion', 'Garlic', 'Ginger', 'Soy sauce', 'Rice'],
      steps: ['Chop the vegetables', 'Stir fry the vegetables', 'Cook the rice'],
      images: '/assets/recipe-3.png',
      difficulty: 'Easy',
      time: '20 minutes',
      servings: 4,

    }
  ];
}



