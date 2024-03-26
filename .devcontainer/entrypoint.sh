#!/bin/bash

# Set /fem-enterprise-patterns as a safe directory for Git
echo 'Setting /fem-enterprise-patterns to be a shared safe directory for git...'
git config --global --add safe.directory /fem-enterprise-patterns
git config --global core.autocrlf false
echo 'Successfully set /fem-enterprise-patterns to be a shared safe directory!'

# Set node_module permissions
echo 'Creating node_modules (if does not exist) and fixing permissions...'
mkdir -p /fem-enterprise-patterns/node_modules
chown -R node:node /fem-enterprise-patterns/node_modules
echo 'Successfully configured node_modules!'

# Execute the Docker command
exec "$@"
