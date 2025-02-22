import Keycloak from "keycloak-connect";
import session from "express-session";
import dotenv from "dotenv";

dotenv.config();

const memoryStore = new session.MemoryStore();

const keycloak = new Keycloak({ store: memoryStore }, {
    "realm": process.env.KEYCLOAK_REALM || "myrealm",
    "auth-server-url": process.env.KEYCLOAK_URL || "http://localhost:8080",
    "ssl-required": "external",
    "resource": process.env.KEYCLOAK_CLIENT_ID || "my-express-app",
    "confidential-port": 0,
    "bearer-only": false
});

export { keycloak, memoryStore };
