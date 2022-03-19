# vite-typescript-azure-functions

A GitHub template to quickly get started with Azure Static Web Apps (+built in Azure Functions), TypeScript and Jest.

**This template application is a React app** - it's based on the [template application here](https://github.com/snakemode/vite-typescript-azure-functions) with additional support for React and React hot reload.

Contents:

- What is this?
- Usage
- Deployment
- Dev Containers
- Credits

# What is this?

This is a GitHub template repository that will create you a pre-configured, v-latest experience on Azure Static Web Apps, along with a hot-reload enabled, local development experience. We've configured Jest, TypeScript, ts-jest, and a bunch of default built jobs so you can create a new respository and just get to work.

Bundled tools:

- Vite (vite.dev) - hot reload, bundleless dev server
- React.js - frontend framework
- TypeScript - language, type checking
- Jest (and ts-jest) - test runner
- Azure Functions - bundled API / BFF support.

# Usage

- Create a respository based on this repository.
- Clone your new repository.
- Run `npm install` to install the dependencies.
- Run `npm run start` to start the local development server.
- Browser to `http://localhost:8080`

You'll see a white page load, which calls the embedded Azure function.
You may need to reload the page on first load as the Azure Functions CLI starts up in parallel and tends to come up just a touch slower than the `vite` dev server.

When everything is running, you'll see the API response written to the page.

You can run tests on the CLI:

```bash
npm run test
```

Or with a VS Code plugin like `Wallaby.js`.

# Deployment

When you use the Azure portal to create a new Static Web Application, select custom, and use the following configuration values:

    app_location: "/"
    api_location: "api"
    output_location: "dist"

You can either enter these in the Azure Portal UI, or you can edit the GitHub build .yml file that gets created in `.github` afterwards if you missed this.

# Dev Containers

This repository contains pre-configured `.devcontainer` support, so you can use it to spin up either VS Code devcontainers, or a GitHub Codespace for your application. It should just work!

# Credits

This template is maintained by David Whitney (@davidwhitney / twitter/@david_whitney).
