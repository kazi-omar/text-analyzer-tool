# Text Analyzer Tool

## **Overview**

The Text Analyzer Tool helps users store and analyze text content efficiently. Users can create texts, retrieve them, and get detailed reports about their text usage. The tool provides insights such as word count, character count, sentence count, paragraph count, and the longest words in a given text.

---

### **How It Works**
- Users can create a text entry by submitting content.
- The system automatically analyzes the text and generates insights.
- Users can retrieve specific texts and update or delete them if needed.
- A **detailed report** summarizing all text entries is available for each user.

---

## **User Actions & App Behavior**

### **Creating a Text**
To create a text, follow these steps:

1. The user submits a text by making a request to:  
   **POST** `http://localhost:3000/api/v1/texts`
2. The system checks if the user exists and validates the text.
3. The text is **saved in the database**, along with an automatic analysis, which includes:
   - Word count
   - Character count
   - Sentence count
   - Paragraph count
   - Longest words
4. The user receives a confirmation with the saved text and its analysis.

**Example Use Case:**  
Sarah wants to analyze a paragraph from her article. She submits the text, and instantly, the tool provides her with key metrics such as the number of words and sentences.

---

### **Getting the Analysis Report**
To get a personalized analysis report, follow these steps:

1. The user requests their report by accessing:  
   **GET** `http://localhost:3000/api/v1/users/reports`
2. The system **retrieves all texts** created by the user.
3. A detailed **summary** is generated, showing:
   - The total number of words, sentences, paragraphs, and characters in all texts.
   - A sorted list of all texts, displayed with analysis insights.
4. The report is presented in a **user-friendly format**, making it easy to review.

**Example Use Case:**  
John is working on multiple articles and wants to check his writing statistics. He accesses his analysis report and sees how many words he's written, how structured his texts are, and how his content has evolved over time.

---
## Project Structure

```
.
├── src
│   ├── config
│   │   ├── database.ts
│   │   └── keycloak.ts
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
│   ├── routes
│   │   └── v1
│   │       ├── textRoutes.ts
│   │       └── userRoutes.ts
|   |       └── textAnalysisRoutes.ts
│   ├── services
│       └── textAnalysisService.ts
│   │   ├── textService.ts
│   │   └── userService.ts
│   ├── controllers
│   │   ├── textController.ts
│   │   └── userController.ts
|   |   └── textAnalysisController.ts
│   ├── middlewares
│   │   └── authMiddleware.ts
│   |   └── errorMiddleware.ts
│   |   └── authorizationMiddleware.ts
│   ├── types
│   ├── errors
│   │   ├── baseError.ts
│   │   ├── http400Error.ts
│   │   ├── http401Error.ts
│   │   ├── http404Error.ts
│   │   ├── http422Error.ts
│   │   ├── http500Error.ts
│   │   └── http502Error.ts
│   |
│   ├── utils
│   │   └── constants.ts
│   |   └── httpStatusCodes.ts
│   |   └── response.ts
│   |   └── textAnalysisUtilities.ts
│   ├── index.ts
│   |
├── .env
├── .env.example
├── docker-compose.yml
├── Dockerfile
├── package.json
├── tsconfig.json
└── README.md

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

#### Docker Compose Configuration

The `docker-compose.yml` file defines the service dependencies as follows:

- expess text-analyzer-tool
- mysql service
- keycloak service
---

### MySQL Service

The application uses a MySQL database to store and manage data. The MySQL service is defined in the `docker-compose.yml` file and is configured to run in a Docker container.
```env
DB_HOST=localhost
DB_NAME=text-analyzer_db
DB_ROOT_PASSWORD=root
DB_PASSWORD=root
DB_USER_NAME=user
DB_PORT=3306
```

### Keycloak Service
The application uses Keycloak for authentication and authorization. The Keycloak service is defined in the docker-compose.yml file and is configured to run in a Docker container.

1. Access the Keycloak Admin UI
   Open your browser and go to:
   👉 http://localhost:8080

2. Log in with Default Admin Credentials
   Username: admin
   Password: admin
3. Create a New Realm
   In the Keycloak Admin UI, navigate to "Realm Settings" and create a new realm (e.g., myrealm).
4. Configure a Client
   Go to the Clients section and create a new client.
   Set the following values:
   Client ID: my-express-app
   Client Protocol: openid-connect
   Enable Standard Flow and Direct Access Grants.
5. Set Valid Redirect URIs
   http://localhost:3000/*
6. Save the client and copy the Client Secret for later use.
7. Create a User
   Go to the Users section and add a new user.
   In the Credentials tab, set a password for the user.

Environment Variables
Ensure the following values are set in your .env file:

```env
KEYCLOAK_URL=http://localhost:8080
KEYCLOAK_REALM=myrealm
KEYCLOAK_CLIENT_ID=my-express-app
KEYCLOAK_CLIENT_SECRET=your-client-secret
```
---

#### Environment Variables

```env
PORT=3000
NODE_ENV=development
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

1. **Start the Application in Development Mode**:

   ```sh
   npm run dev
   ```

1. **Build the Application**:
   ```sh
   npm run build
   ```

### Project Scripts

- **npm run build**: Compiles the TypeScript code to JavaScript.
- **npm run start**: Runs the compiled JavaScript code.
- **npm run dev**: Starts the application in development mode using nodemon.
- **npm run seed**: Seeds the database with initial data.

## API Documentation

This API provides endpoints for user management, text handling, and text analysis.

### **Users Routes**

| Method | Endpoint                | Description                            | Scenario                        |
| ------ | ----------------------- | -------------------------------------- | ------------------------------- |
| POST   | `/api/v1/users`         | Create a new user                      | Used to register a new user     |
| GET    | `/api/v1/users/reports` | Get analysis report for logged-in user | Used to get the analysis report |

### **Text Routes**

| Method | Endpoint            | Description         | Scenario                            |
| ------ | ------------------- | ------------------- | ----------------------------------- |
| POST   | `/api/v1/texts`     | Create a new text   | Used to create a new text           |
| GET    | `/api/v1/texts/:id` | Get a text by ID    | Used to fetch a specific text by ID |
| PUT    | `/api/v1/texts/:id` | Update a text by ID | Used to update a specific text      |
| DELETE | `/api/v1/texts/:id` | Delete a text by ID | Used to delete a specific text      |

### **Text Analysis Routes**

| Method | Endpoint                            | Description            | Scenario                                    |
| ------ | ----------------------------------- | ---------------------- | ------------------------------------------- |
| GET    | `/api/v1/texts/:id/analysis`        | Get full text analysis | Used to fetch the full analysis of a text   |
| GET    | `/api/v1/texts/:id/word-count`      | Get word count         | Used to fetch the word count of a text      |
| GET    | `/api/v1/texts/:id/char-count`      | Get character count    | Used to fetch the character count of a text |
| GET    | `/api/v1/texts/:id/sentence-count`  | Get sentence count     | Used to fetch the sentence count of a text  |
| GET    | `/api/v1/texts/:id/paragraph-count` | Get paragraph count    | Used to fetch the paragraph count of a text |
| GET    | `/api/v1/texts/:id/longest-words`   | Get longest words      | Used to fetch the longest words in a text   |

---
