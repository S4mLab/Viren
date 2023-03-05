# Viren

!["Viren" logo](assets/logo.png)

"Go Viren - think faster, think better."

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

A local installation of NodeJS is required.

### Installing

To get a development environment running:

1. Clone the repository

```
$ git clone https://github.com/S4mLab/Viren.git
```

2. Install all necessary dependencies

The development cycle of Viren follows the mono-repo principle, whereas all technology across the stack is source-controlled within the same repository. Each directory holds its own respective source code for parts of the application and can be tested, run or deployed individually. To get all the dependencies for the entire project, run the following command in [frontend/](https://github.com/S4mLab/Viren/tree/development/frontend) and [backend/](https://github.com/S4mLab/Viren/tree/development/backend).

```
$ npm install
```

3. Setup .env in the server's subrepository for port configuration, database credentials & secret digital tokens for external API usage

Under [backend/](https://github.com/S4mLab/Viren/tree/development/backend), create a ```.env``` with the following:

```
NEO4J_URI=...
NEO4J_USERNAME=...
NEO4J_PASSWORD=...
AURA_INSTANCENAME=...
PORT=...
OPENAI_API_KEY=...
```

4. Start the project

The frontend and backend of the application can be run separately with the same command.

```
$ npm start
```

## Running the tests

Due to time and budget constraint of the 2023 UniHack hackathon, the CI/CD had not been fully implemented.

## Deployment

Once the frontend is complete, build the sites and bundle this minimized content into the backend. As a typical Express application, serving this static web app can be done in the [backend/server.js](https://github.com/S4mLab/Viren/blob/development/backend/server.js) as follows:

```
server.use(express.static('../frontend/'));
```

Where '../frontend/' is the relative directory path towards your static build files.

## Built With

### Backend server + Database

* [Neo4J + AuraDB](https://neo4j.com/cloud/platform/aura-graph-database/) - The GraphQL database technology for storing idea concepts and preserving their relational connections
* [Google Cloud API - Speech-to-text service](https://cloud.google.com/speech-to-text) - The external 3rd-party API used for tokenizing recorded meeting audio into recognizable language
* [@tectalic/openai](https://github.com/tectalichq/public-openai-client-js) - NodeJS wrapper module for ease of interaction with the OpenAI API
* [OpenAI - text-davinci-003](https://platform.openai.com/docs/models) - the pre-generative text model for processing meeting content and summarizing into keypoints

### Frontend

* [Discord.py](https://discordpy.readthedocs.io/en/stable/) - utility library for constructing a simple Discord bot
* [React](https://reactjs.org/docs/getting-started.html) - frontend view-layer library for building the software's browser-based user interface
* [MaterialUI](https://mui.com/) - pre-built styled components to give the user experience a modern look and feel

## Authors

* **Sam Bui** - *Original idea, presenter, leader* - [S4mLab](https://github.com/S4mLab)
* **Kiên Nguyễn** - *Frontend developer, designer, innovator, tester* - [kiennguyen2403](https://github.com/kiennguyen2403)
* **Ân Thiên Lý** - *Backend & database developer, tester, project manager* - [thelazyant164](https://github.com/thelazyant164)
* **Chris Gan** - *Frontend developer, designer, innovator, tester* - [Chris-Gan](https://github.com/Chris-Gan)
* **Tay** - *Designer, developer, tester, presenter*

## Acknowledgments

* Inspiration - ChatGPT and all the innovations this technology has made possible by blurring the boundaries of what is achievable

