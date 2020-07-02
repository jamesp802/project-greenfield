# Project Greenfield

## [Scripts](/package.json)

These are the scripts in package JSON

```
$ npm run start <- starts a development server //Use this for all dev
$ npm run build <- creates production bundle // See server notes
$ npm run test <- runs tests
```

## [Server](/server/index.js)

Because our information comes from the blackbox, this server will only be used to serve the production bundle upon deployment.

```
$ npm build <- builds a production bundle
$ node ./server <- runs express server
```

[Production Build from Express](http://localhost:8080/) is serving production bundle

## [App](/src/components/App.js)

Mounted to 'root' element in index.html

Currently housing the react-router-dom BrowserRouter, Switch and Routes.
- BrowserRouter is renamed 'Router'
- When the app is mounted, the url will be checked through the router.  The router will then render out the component matching the url path.


  - 'http://localhost:3000/' has a path of '/' and thus render's the Home component
  - 'http://localhost:3000/product/' has a path of '/product' and thus render's the product component

- variable paths are done as normal, i.e. '/product/:id' will render the component designated by the Route regardless following url parameter.