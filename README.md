# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

For Deployment to mainnet

1. Change desired network
2. Change contract address
3. OpenSea collection link
4. Footer links etherscan

Contract Addresses

1. First one. All minted
   0xE7C18a3E60FC387f3Ae2725BF92811AAD05865f3
2. No price restriction for owner
   0xE75F070d1822C279b852C79b602B768a932f9702
3. Set of 50 potatoes
   0xFc1a7aa5Eb4793f623989383bFC7Eb6dE72C66eD

Creating the icon.ico

```
convert icon.png -resize 256x256 256.png
convert icon.png -resize 128x128 128.png
convert icon.png -resize 64x64 64.png
convert icon.png -resize 32x32 32.png
convert icon.png -resize 16x16 16.png
convert 16.png 32.png 64.png 128.png 256.png icon.ico
```
