import { Injectable } from '@angular/core';
import 'rxjs/Rx';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';
import { HttpClient } from '../../../node_modules/@angular/common/http';

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) {
  }

  storeRecipes() {
    //const token = this.authService.getToken();

    //return this.httpClient.put('https://ng-http-demo-f0f24.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
    return this.httpClient.put('https://ng-http-demo-f0f24.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }

  getRecipes() {
    //const token = this.authService.getToken();

    //this.httpClient.get<Recipe[]>('https://ng-http-demo-f0f24.firebaseio.com/recipes.json?auth=' + token)
    this.httpClient.get<Recipe[]>('https://ng-http-demo-f0f24.firebaseio.com/recipes.json')
      .map(
        (recipes) => {          
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
