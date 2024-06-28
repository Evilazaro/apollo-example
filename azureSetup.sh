#!/bin/bash

# This script creates an Azure App Registration and retrieves ClientId, TenantId, ClientSecret, and RedirectUri.

# Variables
appName="MyAppRegistration"
appSecret="MyAppSecret"

# Function to handle errors
handle_error() {
    echo "Error: $1" >&2
    exit 1
}

# Check for Azure CLI and jq
command -v az >/dev/null 2>&1 || handle_error "Azure CLI is required but not installed."
command -v jq >/dev/null 2>&1 || handle_error "jq is required but not installed."

# Login to Azure
echo "Logging into Azure..."
az login --use-device-code || handle_error "Azure login failed."

# Create the app registration
echo "Creating app registration: $appName..."
appRegistration=$(az ad app create --display-name "$appName" --enable-access-token-issuance true --enable-id-token-issuance true --web-redirect-uris "http://localhost:3000" 2>/dev/null) || handle_error "Failed to create app registration."

# Extract the appId (ClientId)
clientId=$(echo "$appRegistration" | jq -r '.appId') || handle_error "Failed to retrieve ClientId."

# Extract the TenantId
tenantId=$(az account show --query tenantId -o tsv 2>/dev/null) || handle_error "Failed to retrieve TenantId."

# Add a client secret
echo "Creating client secret..."
clientSecret=$(az ad app credential reset --id "$clientId" --query password -o tsv 2>/dev/null) || handle_error "Failed to create client secret."

# Extract the RedirectUri
redirectUri=$(az ad app show --id "$clientId" --query web.redirectUris[0] -o tsv 2>/dev/null) || handle_error "Failed to retrieve RedirectUri."

# Output the values
echo "App registration created successfully."
echo "AppId: $clientId"
echo "ClientId: $clientId"
echo "TenantId: $tenantId"
echo "ClientSecret: $clientSecret"
echo "RedirectUri: $redirectUri"
