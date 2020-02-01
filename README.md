## TailwindCSS Configuration
Add following packages to the devDependencies:

`npm install tailwindcss -D`
 
Export tailwind configs to the tailwind.js file:

`npx tailwind init tailwind.js --full` 

Add following packages to the devDependencies:

`npm install postcss-cli autoprefixer -D`

Create a new file at project folder:

`touch postcss.config.js`

Add following code snippets to the postcss.config.js:
```
const tailwindcss = require('tailwindcss');
 
 module.exports = {
     plugins: [tailwindcss('./tailwind.js'), require('autoprefixer')]
 };
```

Change scripts section in package.json file like following:
```
"scripts": {
       "start": "npm run watch:css && react-scripts start",
       "build": "npm run build:css && react-scripts build",
       "test": "react-scripts test",
       "eject": "react-scripts eject",
       "build:css": "postcss src/styles/tailwind.css -o src/styles/app.css",
       "watch:css": "postcss src/styles/tailwind.css -o src/styles/app.css -w"
     }
```

Create new stylesheet files inside the src/styles: 

`touch styles/app.css`

`touch styles/tailwind.css`

Add to tailwind.css following code snippets:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## FontAwesome Configuration
```
npm i -S @fortawesome/fontawesome-svg-core \
@fortawesome/react-fontawesome \
@fortawesome/free-regular-svg-icons \
@fortawesome/free-solid-svg-icons \  
@fortawesome/free-light-svg-icons \   
@fortawesome/free-brands-svg-icons
```

==================================================

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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
