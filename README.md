# Module Fedaration React Workspaces
> Example project use webpack module federation with npm workspaces.

* **[Base project](https://github.com/vikpe/react-webpack-typescript-starter)**
* **[Webpack module federation](https://webpack.js.org/concepts/module-federation/)** (5.X)
* **[Npm workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces)** (7.X)
* **[Git submodules](https://github.blog/2016-02-01-working-with-submodules/)**

## Installation
1. Clone/download repo
3. Run `git submodule update --init --recursive`
4. Run `npm install`

## Usage
**Development**

`npm run start:bundle`

* Build app continuously (HMR enabled)
* App served @ `http://localhost:8080`
* DevServer writeToDisk to `/review/`

**Production**

`npm run build:bundle`

* Build app to `/dist/` with shared modules present inside `/packages/`

---

**All commands**

Command | Description
--- | ---
`npm run start-dev` | Build app continuously (HMR enabled) and serve @ `http://localhost:8080`
`npm run start-prod` | Build app once (HMR disabled) to `/dist/` and serve @ `http://localhost:3000`
`npm run build` | Build app to `/dist/`
`npm run test` | Run tests
`npm run lint` | Run linter
`npm run lint --fix` | Run linter and fix issues
`npm run start` | (alias of `yarn run start-dev`)
`npm run start:bundle` | Build app continuously with shared modules and serve @ `http://localhost:8080`
`npm run build:bundle` |Build app to `/dist/` with shared modules

## To improve
* **Local devServer** | Folder `/review/` needs to be cleaned sometimes
* **Types module** | Need to export types of shared modules
* **ModuleFederation shared deps** | Error eager with `...packageJsonDeps`
