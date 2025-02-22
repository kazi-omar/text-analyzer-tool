import swaggerJsdoc from "swagger-jsdoc";
import { Express, Request, Response } from "express";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Text Analyzer Tool API",
            version: "1.0.0",
            description: "API documentation for the Text Analyzer Tool",
        },
        servers: [
            {
                url: "http://localhost:3000/api/v1",
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
        },
        security: [
            {
                bearerAuth: [],
            },
        ],
    },
    apis: ["./src/routes/v1/*.ts", "./src/models/*.ts"], // Paths for OpenAPI definitions
};

const swaggerSpec = swaggerJsdoc(options);

const setupSwaggerDocs = (app: Express) => {
    // Serve Swagger JSON
    app.get("/api-docs-json", (req: Request, res: Response) => {
        res.json(swaggerSpec);  // Send the generated Swagger JSON
    });

    // Serve Swagger UI at /api-docs
    app.use(
        "/api-docs",
        require("swagger-ui-express").serve,
        require("swagger-ui-express").setup(swaggerSpec)
    );
};

export default setupSwaggerDocs;
