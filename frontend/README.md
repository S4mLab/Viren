# Echo

!["Echo" logo](assets/logo.png)

An audio-processing utility mobile app supporting basic functionality such as background noise removal, volume adjustment, speech-to-text transcription & realtime noise-reduced recording.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

A local installation of NodeJS is required

### Installing

To get a development environment running:

1. Clone the repository

```
$ git clone https://github.com/thelazyant164/Echo.git
```

2. Install all necessary dependencies

```
$ npm install
```

3. Setup .env in root directory for port configuration, database credentials & secret digital signature

```
TEST_MONGODB_URI=...
MONGODB_URI=...
PORT=3001
SECRET=...
```

4. Start the project

Run the frontend

```
$ npm start
```

Follow the CLI prompts to run the app on a web server or on a virtual device. Note that the web mock-up will not have access to native features such as accessing the device storage and writing/reading data to disk.

Run the backend

```
$ npm run server
```

## Running tests

### Snapshot tests

As of current, only snapshot tests for synchronous & platform-independent components are available, but we have future plans for adding more test coverage.
To run all automated component snapshot tests:

```
npm run test
```

### Coding style tests

Using [Airbnb's ESlint plugin](https://github.com/airbnb/javascript), on top of React Native's recommended rules. A few rules have been overridden to our preference, see [eslintrc.json](https://github.com/thelazyant164/Echo/blob/master/.eslintrc.json) for more details.

```
npm run lint
```

## Built With

### Client-side

* [React](https://reactjs.org/docs/getting-started.html) - Core library for React
* [React Native](https://reactnative.dev/) - View-layer library for cross-platform compatibility
* [Expo](https://docs.expo.dev/) - Framework & SDK for streamlining development build & ease of access platform-specific API
* [Axios](https://docs.expo.dev/) - High-level library for making HTTP requests to API endpoints

### Server-side

* [Express](http://expressjs.com/en/4x/api.html) - Backend framework for defining API endpoints
* [Mongoose](https://mongoosejs.com/docs/guide.html) - High-level integration library for MongoDB
* [Bcrypt](https://github.com/kelektiv/node.bcrypt.js) - Password hashing
* [JsonWebToken](https://github.com/auth0/node-jsonwebtoken) - JSON Web Token authorization
* [Multer](https://github.com/expressjs/multer) - Multipart form data handling for file transfer

### Testing

* [Jest](https://jestjs.io/docs/getting-started) - Used to make snapshot component tests

### Development tool

* [ESlint](https://eslint.org/docs/latest/) - Used to enforce consistent coding style & perform static code analysis
* [Nodemon](https://github.com/remy/nodemon) - Live reload for backend development
* [Cross-env](https://github.com/kentcdodds/cross-env) - Set NODE_ENV for Window users
* [Dotenv](https://github.com/motdotla/dotenv) - Setup environment variables (credentials etc...)
* [MongoDB-memory-server](https://github.com/nodkz/mongodb-memory-server) - Mock in-memory MongoDB for testing
* [Supertest](https://github.com/visionmedia/supertest) - Superagent to mock API calls for testing

## Authors

* **Trung Kien Nguyen** - *Initial idea, front-end developer, UI/UX designer* - [kiennguyen2403](https://github.com/kiennguyen2403)
* **Aly** -  *Back-end developer, Q&A* - [thelazyant164](https://github.com/thelazyant164)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details