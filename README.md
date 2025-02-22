# Text Analyzer Tool

This is a simple text analyzer tool built with TypeScript and Express.

## Project Structure

```
.
├── src
│   ├── config
│   │   └── database.ts
│   ├── database
│   │   ├── migrations
│   │   └── seeders
│   │       └── SeedDatabase.ts
│   ├── helpers
│   │   └── SharedProp.ts
│   ├── models
│   │   ├── Text.ts
│   │   ├── TextAnalysis.ts
│   │   └── User.ts
│   └── index.ts
├── .env
├── .env.example
├── docker-compose.yml
├── package.json
└── tsconfig.json
```

## Getting Started

### Prerequisites

- Node
- npm
- Docker

### Installation

1. Clone the repository:
   ```sh
   git clone git@github.com:kazi-omar/text-analyzer-tool.git
   ```
2. Navigate to the project directory:
   ```sh
   cd text-analyzer-tool
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

### Configuration

Copy the `.env.example` file to `.env` and set the necessary environment variables:

```sh
cp .env.example .env
```

### MySQL Service

The application uses a MySQL database to store and manage data. The MySQL service is defined in the `docker-compose.yml` file and is configured to run in a Docker container.

#### Docker Compose Configuration

The `docker-compose.yml` file defines the MySQL service as follows:

* expess text-analyzer-tool
* mysql service
* keycloak service

#### Environment Variables

The MySQL service uses the following environment variables, which should be defined in a `.env` file:

```env
PORT=3000

DB_HOST=localhost
DB_NAME=text-analyzer_db
DB_ROOT_PASSWORD=root
DB_PASSWORD=root
DB_USER_NAME=user
DB_PORT=3306

KEYCLOAK_URL=http://localhost:8080
KEYCLOAK_REALM=myrealm
KEYCLOAK_CLIENT_ID=my-express-app
KEYCLOAK_CLIENT_SECRET=client-secret
```

### Running the Application

1. **Build and run Container**:

   ```sh
   docker-compose up -d --build

   ```


1. **Seed the Database**:

   ```sh
   npm run seed
   ```

2. **Start the Application in Development Mode**:

   ```sh
   npm run dev
   ```

3. **Build the Application**:
   ```sh
   npm run build
   ```

### Project Scripts

- **npm run build**: Compiles the TypeScript code to JavaScript.
- **npm run start**: Runs the compiled JavaScript code.
- **npm run dev**: Starts the application in development mode using nodemon.
- **npm run seed**: Seeds the database with initial data.
