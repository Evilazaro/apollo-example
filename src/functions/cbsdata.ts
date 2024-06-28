import { app, HttpHandler, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { ConfidentialClientApplication, Configuration, AuthorizationCodeRequest } from "@azure/msal-node";
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const validateEnvVariables = () => {
    const requiredEnvVars = ['CLIENT_ID', 'TENANT_ID', 'CLIENT_SECRET', 'REDIRECT_URI'];
    const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
    if (missingVars.length > 0) {
        throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`);
    }
};

const createErrorResponse = (status: number, message: string): HttpResponseInit => {
    return {
        status,
        body: message,
        headers: {
            "Content-Type": "text/plain"
        },
    };
};

export async function cbsdata(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    try {
        validateEnvVariables();

        const clientId = process.env.CLIENT_ID!;
        const tenantId = process.env.TENANT_ID!;
        const clientSecret = process.env.CLIENT_SECRET!;
        const redirectUri = process.env.REDIRECT_URI!;

        // MSAL configuration
        const msalConfig: Configuration = {
            auth: {
                clientId,
                authority: `https://login.microsoftonline.com/${tenantId}`,
                clientSecret,
            }
        };

        const cca = new ConfidentialClientApplication(msalConfig);

        const code = (request.query as URLSearchParams).get('code');
        if (!code) {
            return createErrorResponse(400, 'Authorization code is missing in the request.');
        }

        const tokenRequest: AuthorizationCodeRequest = {
            code,
            scopes: ["openid", "profile", "email"],
            redirectUri,
        };

        const response = await cca.acquireTokenByCode(tokenRequest);
        const claims = response.account?.idTokenClaims;
        const userEmail = claims?.email || 'No email claim present';

        return {
            status: 200,
            body: "Claims Received",
            headers: {
                "Content-Type": "text/plain"
            },
            jsonBody: {
                claims: claims
            }
        };

    } catch (error: any) {
        context.log('Error in cbsdata function:', error);
        return createErrorResponse(500, `Internal Server Error: ${error.message}`);
    }
};

app.http('cbsdata', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: cbsdata
});
