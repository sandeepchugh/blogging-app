# Blogging application

Demo project to showcase setting up a blogging application using nodejs and react using microservices to implement the CQRS pattern.

## APIs

### Posts api
The posts api, available in the `posts` directory, as the name suggests is used to add and retrieve blog posts. 

#### Available Scripts

##### `npm start`

Runs the app in the development mode.<br />
Use GET/POST [http://localhost:4000/posts] to view it in the postman/curl.

### Comments api
The comments api, available in the `comments` directory is used to add and retrieve comments associated with a post. 

#### Available Scripts

##### `npm start`

Runs the app in the development mode.<br />
Use GET/POST [http://localhost:4001/posts/:postid/comments] to view it in the postman/curl.

### Query Service api
The query service api, available in the `query` directory is used to retrieve blog posts and comments associated with the blog posts in a single call. This service provides the Query part of the CQRS implementation and is aligned to support the front end application by providing all the required data in a single call 

#### Available Scripts

##### `npm start`

Runs the app in the development mode.<br />
Use GET [http://localhost:4002/posts] to view it in the postman/curl.
Use POST [http://localhost:4002/events] to view it in the postman/curl.

### Event-Bus api
The event bus is a simple implementation of a bus using an api, available in the `event-bus` directory and is used to forward the posts and comments to the query service. 

#### Available Scripts

##### `npm start`

Runs the app in the development mode.<br />
Use POST [http://localhost:4005/events] to view it in the postman/curl.

## Web application

The `client` project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the `client` project directory, you can run:

#### Available Scripts
##### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

##### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

##### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

##### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

##### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

##### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

##### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

##### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

##### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
