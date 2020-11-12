# Enteprise Patterns Course

This is the sample project for the Enteprise Patterns course for Frontend Masters.

## Prerequisites

- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- Node.js and NPM – we recommend using [NVM (Linux/Mac)](https://github.com/creationix/nvm) or [NVM-Windows (Windows)](https://github.com/coreybutler/nvm-windows)
- Install Angular CLI via `npm i -g @angular/cli`

## Web: Getting Started

```
git clone https://github.com/onehungrymind/fem-enterprise-patterns.git
cd fem-enterprise-patterns
yarn
```

You can run the **micro** app via `npm run serve:micro`

The micro application will open to [http://localhost:4400](http://localhost:4400) in your browser.

You can run the **meso** app via `npm run serve:meso`

The meso application will open to [http://localhost:4500](http://localhost:4500) in your browser.

You can run the **macro** app via `npm run serve:all`

The micro application will open to [http://localhost:4200](http://localhost:4200) in your browser.

The `serve:all` command is a convenience methods that runs the `serve:api` and `serve:macro` commands concurrently. You can run each command separately if you need to.

```
"serve:api": "nx run api:serve",
"serve:micro": "nx run micro:serve --port=4400 --open",
"serve:meso": "nx run meso:serve --port=4500 --open",
"serve:macro": "ng serve --open",
"serve:all": "concurrently \"npm run serve:api\" \"npm run serve:macro\"",
```

> Note: the above terminal commands are for Mac. Remember to substitute the appropriate commands for your OS.
