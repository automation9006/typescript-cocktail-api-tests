import { RestApiClient } from '../config/rest-api-calls'

export class GetCocktailAPI extends RestApiClient {
  resourceUrl = '/random.php'
    
  async getCocktailEndPoint() {
    return await this.get(process.env.BASE_URL+this.resourceUrl,
      { headers: { 'accept': 'application/json' } })
  }
  async getCocktailByDrinkName(drinkName: string) {
    return await this.get(process.env.BASE_URL+'/search.php?s='+drinkName,
      { headers: { 'accept': 'application/json' } })
  }
  async getCocktailByIngredientName(ingredientName: string) {
    return await this.get(process.env.BASE_URL+'/search.php?i='+ingredientName,
      { headers: { 'accept': 'application/json' } })
  }   
  async getCocktailByCocktailID(idDrink: string) {
    return await this.get(process.env.BASE_URL+'/lookup.php?i='+idDrink,
      { headers: { 'accept': 'application/json' } })
  }
  async getCocktailCategories(category: string) {
    return await this.get(process.env.BASE_URL+'/filter.php?c='+category,
      { headers: { 'accept': 'application/json' } })
  }   
 
}