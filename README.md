![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# Lab | React Native - Advanced testing

## Learning Goals

This exercise allows you to practice and apply the concepts and techniques taught in class.

Upon completion of this exercise, you will be able to:

- Implement testing for your react native applications.
- Evaluate code coverage.
- Implement snapshot testing using jest for your react native applications.

## Introduction

In this lab, we're going to get a bit of fun by creating a game that you might already know. Tic-tac-toe!.

## Requirements

- Fork this repo.
- Clone this repo.
- Run `nvm use` to use the node version specified in the `.nvmrc` file.

```bash
nvm use
```

- Install the dependencies.

```bash
npm install
```

- Start the project.

```bash
npm run ios
npm run android
```

## Submission

- Upon completion, run the following commands:

```bash
git add .
git commit -m "done"
git push origin master
```

- Create a Pull Request so your TAs can review your work.

## Example

This is how the app should look like:

![pokedex](https://miro.medium.com/v2/resize:fit:816/1*0yUXTv9WzD5sJMQN5JvMeg.gif)

## Instructions

### Iteration 1: Start working on the game logic tests

- Plan the Basic Game Logic:

Before writing tests, plan out the basic game logic and requirements. Decide on data structures for the game board, player moves, and game state management.

- Create the First Test:

Start with the simplest possible test case. For example, you might create a test to check if the game board is initially empty or if the game initializes correctly.
Write the test using Jest and the testing library of your choice.

- Run the Test (and Watch It Fail):

At this point, your test should fail because you haven't implemented the game logic yet. This step helps verify that your test is valid and meaningful.

## Iteration 2: Create the components

- *Create the Tests for the Components**:
   - Identify the key components you'll be using in your Tic Tac Toe game, such as the game board, cells, and any other UI elements.
   - Write test cases for these components using Jest and React Native Testing Library.
   - Consider creating tests for different states and scenarios to ensure comprehensive coverage.

- *Test Rendering and User Interactions**:
   - Write tests to check if the components render correctly with the expected UI elements and layout.
   - Test user interactions like tapping on cells to make moves and verify if the game state updates as expected.
   - Ensure that the components respond appropriately to user actions and that the game logic behaves correctly.

- *Implement the Necessary Components**:
   - Start implementing the components based on the requirements and expected behavior defined by your tests.
   - Write the minimal code to get the tests to pass, adhering to the principles of Test-Driven Development.
   - As you implement each component, make sure to run the tests to validate their correctness and ensure they meet the defined specifications.

### Iteration 3: Write the game logic

- Write the Minimum Code to Pass the Test:

Implement the simplest code necessary to make the test pass. Don't worry about adding extra features just yet; focus on passing the test.

- Run the Test Again (and Watch It Pass):

After writing the implementation code, run the test again. It should now pass, indicating that your minimal code works correctly.

### Bonus

1. Make sure to implement snapshot testing.

2. Implement test coverage

Happy coding! 💙