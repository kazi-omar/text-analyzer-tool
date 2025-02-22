import Keycloak, { KeycloakConfig } from "keycloak-connect";
import session from "express-session";
import dotenv from "dotenv";

dotenv.config();

const memoryStore = new session.MemoryStore();

interface ExtendedKeycloakConfig extends KeycloakConfig {
    credentials?: {
        secret: string;
    };
}

const keycloakConfig: ExtendedKeycloakConfig = {
    realm: process.env.KEYCLOAK_REALM || "myrealm",
    "auth-server-url": process.env.KEYCLOAK_URL || "http://localhost:8080",
    "ssl-required": "external",
    resource: process.env.KEYCLOAK_CLIENT_ID || "my-express-app",
    "confidential-port": 0,
    "bearer-only": false,
    credentials: {
        secret: process.env.KEYCLOAK_CLIENT_SECRET || "my-client-secret"
    }
};

const keycloak = new Keycloak({ store: memoryStore }, keycloakConfig);

export { keycloak, memoryStore };
