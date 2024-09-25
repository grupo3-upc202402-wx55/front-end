import { Component, } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MatCard, MatCardContent, MatCardImage} from "@angular/material/card";
import {NgForOf, NgIf} from "@angular/common";
import {RecipeService} from "../../../recipe/services/recipe.service";


@Component({
  selector: 'app-descriptions-recipes-card',
  standalone: true,
  imports: [
    MatCardImage,
    MatCard,
    MatCardContent,
    NgIf,
    NgForOf
  ],
  templateUrl: './descriptions-recipes-card.component.html',
  styleUrl: './descriptions-recipes-card.component.css'
})
export class DescriptionsRecipesCardComponent {

  recipe: any;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router) { }
  currentProfile: any;

  ngOnInit(): void {
    this.getRecipeData();

  }

  getRecipeData(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.recipeService.getRecipeById(id).subscribe((data: any) => {
        this.recipe = data;
        console.log(this.recipe);
      });
    } else {
      console.error('No se proporcionó un ID de Receta');
      return;
    }
  }


  Handle(event:number) {
    alert(`You rate ${event}`);
  }

  goBackHome(): void {
    this.router.navigate(['/home']);
  }
}



