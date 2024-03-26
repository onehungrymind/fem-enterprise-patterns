# [Choice] NodeJS Version
ARG VARIANT=12-bullseye
FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:${VARIANT}

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=18
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# Copy the entry point script into the image
COPY entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]

RUN mkdir -p /fem-enterprise-patterns/node_modules
RUN chown -R node:node /fem-enterprise-patterns/node_modules

# If you want to install more global node packages
RUN su node -c "npm install -g @angular/cli@^10.1.0"
