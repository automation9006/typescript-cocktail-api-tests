import { test, expect } from '../fixtures/api-fixtures'

test('GET - validate cocktail names store in an array', {tag:'@Regression'}, async ({ getCocktailApi }) => {

  const cocktailNames: string[] = []
  
  for (let i = 0; i < 3; i++) {
    const response = await getCocktailApi.getCocktailEndPoint()
    expect(response.status()).toBe(200)
    expect(response.ok()).toBeTruthy()
    const responseBody = await response.json()
    const cocktailName = responseBody.drinks?.[0]?.strDrink
    expect(cocktailName).toBeDefined()
    cocktailNames.push(cocktailName)
  }
  expect(cocktailNames.length).toBe(3)
  console.log('Cocktail Names:', cocktailNames)

})

test('GET - validate cocktail drink by name', {tag:'@Regression'}, async ({ getCocktailApi }) => {

  const response = await getCocktailApi.getCocktailByDrinkName('Smashed Watermelon Margarita')
  expect(response.status()).toBe(200)
  expect(response.ok()).toBeTruthy()
  const responseBody = await response.json()
  expect(responseBody.drinks[0].strDrink).toBe('Smashed Watermelon Margarita')
  expect(responseBody.drinks[0].idDrink).toBe('178332')

})

test('GET - validate cocktail by IngredientName', {tag:'@Regression'}, async ({ getCocktailApi }) => {

  const response = await getCocktailApi.getCocktailByIngredientName('vodka')
  expect(response.status()).toBe(200)
  expect(response.ok()).toBeTruthy()
  const responseBody = await response.json()
  expect(responseBody.ingredients[0].strIngredient).toBe('Vodka')
  expect(responseBody.ingredients[0].idIngredient).toBe('1')

})

test('GET - validate cocktail by cocktailID', {tag:'@Regression'}, async ({ getCocktailApi }) => {

  const response = await getCocktailApi.getCocktailByCocktailID('11007')
  expect(response.status()).toBe(200)
  expect(response.ok()).toBeTruthy()
  const responseBody = await response.json()
  expect(responseBody.drinks[0].idDrink).toBe('11007')
  expect(responseBody.drinks[0].strDrink).toBe('Margarita')

})

test('GET - validate cocktail by cocktail categories',  async ({ getCocktailApi }) => {

  const response = await getCocktailApi.getCocktailCategories('Cocktail')
  expect(response.status()).toBe(200)
  expect(response.ok()).toBeTruthy()
  const responseBody = await response.json()
  expect(responseBody.drinks[0].strDrink).toBe('155 Belmont')
  expect(responseBody.drinks[1].strDrink).toBe('57 Chevy with a White License Plate')

})