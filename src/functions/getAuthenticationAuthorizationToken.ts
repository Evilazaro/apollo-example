import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import axios from "axios";
import jwt_decode, { jwtDecode } from "jwt-decode";
import { userInfo } from "os";


interface TokenClaims {
    [key: string]: any;
}

const CLIENT_ID = process.env.CLIENT_ID;
const TENANT_ID = process.env.TENANT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const AUTH_URL = `https://login.microsoftonline.com/${TENANT_ID}/oauth2/v2.0/token`;

export async function getAuthenticationAuthorizationToken(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    try {
        const response = await axios.post(
            AUTH_URL,
            new URLSearchParams({
                client_id: CLIENT_ID || "",
                scope: "https://graph.microsoft.com/.default",
                client_secret: CLIENT_SECRET || "",
                grant_type: "client_credentials",
            }),
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        );

        const token = response.data.access_token;
        const claims: TokenClaims = jwtDecode(token);
        return {
            status: 200,
            jsonBody: {
                token: token,
                claims: claims,
                userInfo: {
                    userId: claims.oid,
                    userName: claims.name,
                    userEmail: claims.email,
                },
            },
        };
    } catch (error) {
        return {
            status: 500,
            body: `Error retrieving token: ${error.message} ClientId: ${CLIENT_ID} TenantId: ${TENANT_ID} ClientSecret: ${CLIENT_SECRET}`,
        };
    }
}

app.http('getAuthenticationAuthorizationToken', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: getAuthenticationAuthorizationToken
});
