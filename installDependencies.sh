#!/bin/bash

# Bash script to install project dependencies

# Install the latest version of the 'debug' package to address potential errors
echo "Installing the latest version of 'debug' package..."
sudo apt-get update
sudo apt-get install -y jq

npm install debug@latest

# Install required Azure and Apollo packages
echo "Installing Azure and Apollo dependencies..."
npm install @as-integrations/azure-functions @apollo/server graphql @azure/functions azure-functions-core-tools@4

# Install MSAL and dotenv packages for authentication and environment variable management
echo "Installing 'msal-node' and 'dotenv' packages..."
npm install @azure/msal-node dotenv

# Install the 'axios' and jwt-decode packages
echo "Installing 'axios' and 'jwt-decode' packages..."
npm install axios jwt-decode

# Install Azure Identity 
echo "Installing Azure Identity..."
npm install @azure/identity

# Install any remaining dependencies from package.json
echo "Installing remaining dependencies from package.json..."
npm install

echo "All dependencies installed successfully."
