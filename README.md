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

```yaml
version: "3.9"

services:
  #  app:
  #    build:
  #      context: .
  #      dockerfile: Dockerfile
  #    image: text-analyzer-tool
  #    container_name: text-analyzer-tool
  #    ports:
  #      - "${PORT}:${PORT}"
  #    environment:
  #      - PORT=${PORT}
  #      - DB_HOST=db
  #      - DB_PORT=${DB_PORT}
  #      - DB_USER_NAME=${DB_USER_NAME}
  #      - DB_PASSWORD=${DB_PASSWORD}
  #      - DB_NAME=${DB_NAME}
  #    depends_on:
  #      - db

  db:
    image: mysql:8.2.0
    container_name: text-analyzer_db
    restart: unless-stopped
    tty: true
    ports:
      - "${DB_PORT}:${DB_PORT}"
    environment:
      MYSQL_ROOT_PASSWORD: ${DB_ROOT_PASSWORD}
      MYSQL_DATABASE: ${DB_NAME}
      MYSQL_USER: ${DB_USER_NAME}
      MYSQL_PASSWORD: ${DB_PASSWORD}
    volumes:
      - db_data:/var/lib/mysql

volumes:
  db_data:
    driver: local
```

#### Environment Variables

The MySQL service uses the following environment variables, which should be defined in a `.env` file:

```env
PORT=3000
DB_HOST=db
DB_PORT=3306
DB_USER_NAME=root
DB_ROOT_PASSWORD=root
DB_PASSWORD=root
DB_NAME=text_analyzer_db
```

#### Database Connection

The database connection is configured in the `src/config/database.ts` file:

```typescript
import { DataSource } from "typeorm";
import * as path from "path";
import dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER_NAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false, // Set to false when using migrations
  logging: false,
  entities: [path.join(__dirname, "../models/**/*.ts")],
  migrations: [path.join(__dirname, "../database/migrations/**/*.ts")],
  subscribers: [path.join(__dirname, "../subscriber/**/*.ts")],
});

export const connectDatabase = async () => {
  try {
    await AppDataSource.initialize();
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
};
```

### Running the Application

1. **Start the MySQL Service**:

   ```sh
   docker-compose up -d db
   ```

2. **Run Migrations**:

   ```sh
   npm run migration:run
   ```

3. **Seed the Database**:

   ```sh
   npm run seed
   ```

4. **Start the Application in Development Mode**:

   ```sh
   npm run dev
   ```

5. **Build the Application**:
   ```sh
   npm run build
   ```

### Project Scripts

- **npm run build**: Compiles the TypeScript code to JavaScript.
- **npm run start**: Runs the compiled JavaScript code.
- **npm run dev**: Starts the application in development mode using nodemon.
- **npm run seed**: Seeds the database with initial data.
