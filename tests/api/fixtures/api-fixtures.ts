import { test as base } from '@playwright/test'
import { GetCocktailAPI } from '../common/get-api-requests'

type ApiFixtures = {
  getCocktailApi: GetCocktailAPI;
};

export const test = base.extend<ApiFixtures>({
  getCocktailApi: async ({ request }, use) => {
    const getCocktailApi = new GetCocktailAPI(request)
    await use(getCocktailApi)
  },
})

export const expect = test.expect