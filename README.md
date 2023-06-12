<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

# Bookmark API

The Bookmark API is a RESTful API that allows users to manage bookmarks. It provides endpoints for creating, retrieving, updating, and deleting bookmarks, as well as user authentication and authorization.

## Features

- User authentication: Users can sign up, sign in, and obtain access tokens for authentication.
- Bookmark management: Users can create, retrieve, update, and delete bookmarks.
- User management: Users can retrieve their own user profile and update their user information.

## Technologies Used

- Nest.js: A progressive Node.js framework for building efficient and scalable server-side applications.
- Prisma: A modern database toolkit for Node.js and TypeScript.
- PostgreSQL: A powerful, open-source relational database management system.
- GraphQL: A query language for APIs and a runtime for executing queries with your existing data.
- JWT: JSON Web Tokens for secure authentication and authorization.
- Jest: A JavaScript testing framework for writing unit and integration tests.
- Docker: A containerization platform for building, deploying, and running applications.
- Microservices Architecture: An architectural style that structures an application as a collection of loosely coupled services, each serving a specific business goal, and communicating with each other via lightweight protocols like HTTP or messaging queues.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ankitrout2903/bookmark-api.git


## Installation

```bash
$ yarn install
```

## Running the app

Install Docker desktop before running api
https://www.docker.com/products/docker-desktop/

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```
```bash
yarn // install
yarn db:dev:restart // start postgres in docker and push migrations
yarn start:dev // start api in dev mode
```
