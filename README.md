# ng-admin demo configuration

This is a clone of the [ng-admin](https://github.com/marmelab/ng-admin) module for Angular.js.

To explore the source code, start with [js/main.js](https://github.com/marmelab/ng-admin-demo/blob/master/js/main.js).

## Installation

```sh
# clone the repo and run npm install
Available npm scripts:
- build - to build the project (no need to run the app for dev)
- serve - run webpack-dev-server 
```

## Generating a new Dataset

The dataset is generated randomly. You can generate a new dataset with:

```sh
# update the data.js file
cd ../dataGenerator folder and run "node generate.js"
```

To modify the data generator, start with [dataGenerator/generate.js](https://github.com/marmelab/ng-admin-demo/blob/master/dataGenerator/generate.js).

ng-admin-demo is licensed under the [MIT Licence](LICENSE), and sponsored by [marmelab](http://marmelab.com).
