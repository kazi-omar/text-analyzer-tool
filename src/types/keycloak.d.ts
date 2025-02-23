import { Grant as KeycloakGrant, Token as KeycloakToken } from "keycloak-connect";

declare module "express" {
    interface Request {
        kauth?: {
            grant?: Grant;
        };
    }
}

interface CustomTokenContent {
    email_verified: boolean;
    name: string;
    preferred_username: string;
    given_name: string;
    family_name: string;
    email: string;
    sub: string;
}

interface Token extends KeycloakToken {
    content: CustomTokenContent;
    token: string;
}

interface Grant extends KeycloakGrant {
    access_token?: Token;
}
