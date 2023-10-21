# NestJS Air Quality API
- REST API with [TypeORM](http://typeorm.io) support 
- Swagger documentation, class-validator validation

## 1. Getting started

### 1.1 Requirements

Before starting, make sure you have at least those components on your workstation:

- An up-to-date release of [NodeJS](https://nodejs.org/) and NPM
- A database PostgreSQL.

### 1.2 Project configuration

Start by cloning this project on your workstation.

``` sh
git clone https://github.com/70747H/air-quality.git my-project
```

The next thing will be to install all the dependencies of the project.

```sh
cd ./air-quality
npm install
```

Once the dependencies are installed, you can now configure your project by creating a new `.env` file containing your environment variables used for development.

```
cp .env.example .env
vi .env
```

### 1.3 Launch and discover

You are now ready to launch the NestJS application using the command below.

```sh
# Perform migrations in your database using TypeORM
npm run typeorm:run

# Launch the development server with TSNode
npm run start:dev
```

You can now head to `http://localhost:3011/api` and see your API Swagger docs.

### 1.4 Test

```sh
# run all unit tests
npm run test
```