# Echo

!["Echo" logo](assets/logo.png)

An audio-processing utility mobile app supporting basic functionality such as background noise removal, volume adjustment, speech-to-text transcription & realtime noise-reduced recording. This is the processing server to be run in the backend.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development purposes.

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

Run the backend

```
$ npm run server
```

### Coding style tests

Using [Airbnb's ESlint plugin](https://github.com/airbnb/javascript). A few rules have been overridden to our preference, see [eslintrc.json](https://github.com/thelazyant164/Echo/blob/master/.eslintrc.json) for more details.

```
npm run lint
```

## Built With

### Server-side

- [Express](http://expressjs.com/en/4x/api.html) - Backend framework for defining API endpoints
- [Mongoose](https://mongoosejs.com/docs/guide.html) - High-level integration library for MongoDB
- [Bcrypt](https://github.com/kelektiv/node.bcrypt.js) - Password hashing
- [JsonWebToken](https://github.com/auth0/node-jsonwebtoken) - JSON Web Token authorization
- [Multer](https://github.com/expressjs/multer) - Multipart form data handling for file transfer

### Development tool

- [ESlint](https://eslint.org/docs/latest/) - Used to enforce consistent coding style & perform static code analysis
- [Nodemon](https://github.com/remy/nodemon) - Live reload for backend development
- [Cross-env](https://github.com/kentcdodds/cross-env) - Set NODE_ENV for Window users
- [Dotenv](https://github.com/motdotla/dotenv) - Setup environment variables (credentials etc...)
- [MongoDB-memory-server](https://github.com/nodkz/mongodb-memory-server) - Mock in-memory MongoDB for testing

## Authors

- **Trung Kien Nguyen** - _Initial idea, front-end developer, UI/UX designer_ - [kiennguyen2403](https://github.com/kiennguyen2403)
- **Aly** - _Back-end developer_ - [thelazyant164](https://github.com/thelazyant164)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
