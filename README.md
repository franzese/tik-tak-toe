This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Project Prompt

Please write a simple two-player game of ​tic-tac-toe​ on 3x3 board using React components. This game is played by two players in the ​same​ browser window, with progress saved to a server using either REST or GraphQL. Please mock this server endpoints by storing this information in localStorage.

Your solution should provide a clean abstraction for managing state of the components, game, and cumulative scores. Ideally, this abstraction leverages the latest and greatest best practices from the React community, but any clean and generalizable abstraction will do. Also, css styling and high-quality interactions are a bonus.

<b>Note: The cumulative number of wins/losses/draws for each player should be stored at the top of the screen on a fixed navigation bar, and this information should persist after any page reload.</b>>

Once submitted - We’ll schedule a call where; you'll be given 30 minutes to discuss your solution and any engineering tradeoffs you had to consider. Be prepared to discuss:

-   Your overall approach to the problem
-   Choice of component architecture (boxes, Xs and Os, score)
-   DOM and React component hierarchy
-   State management (initialization, events, valid moves, wins, hooks, context)
-   Rendering and dependencies
-   Scaling and API considerations

Finally, although the server implementation is out of scope, but please be prepared to discuss how you would choose to interact with a server if the game expanded to multiplayer action. If time permits, outline a REST (or GraphQL!) API spec for your hypothetical back-end.

<b><i>Bonus points: Submitting a Git Repo</i></b>
