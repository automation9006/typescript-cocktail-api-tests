Scenario
You've recently joined a team as the sole Automation Engineer.
They are in need of some automated tests for APIs and their front end. Your task requires you to set up
the initial framework and a single test for APIs and UI.

Minimum Requirements
● Playwright Framework
● A readme to get the tests running
● Scripts to run tests in the package.json
● A directory structure that's scalable
● Code re-usability

Task
Set up the repo with the above in and write the code that executes the following tests

● API:
○ Given I call a random cocktail 3 times
○ When I store the cocktail name in an array
○ Then my array should have 3 cocktails names

Resources
● Cocktail GET endpoint
○ https://www.thecocktaildb.com/api.php#:~:text=Lookup%20a%20random%20cocktail

Things to think about/Bonus Points:
● Fixtures
● Directory structure
● Storing elements
● Scaling the repo
● Reporting
● Pipelines

############################################################################################

## run specific test from command line
ENV=qa npx playwright test post-create-booking.spec.ts

## run regression tests from command line
npm run test:regression


## run regression tests from command line
npm run test:regression