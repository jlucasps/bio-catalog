# bio-catalog

## Biological species catalog

### Cloning repo

````bash
$ git clone git@github.com:jlucasps/bio-catalog.git
$ cd bio-catalog
````

### Running development environment

After clone the repo, build and install dependencies:

* Install node.js dependencies into ````bio-catalog/node_modules```` folder

````bash
$ npm install
````

* Install bower dependêncies into ```` bio-catalog/public/components ````

````bash
$ bower install
````

(bower components folder is defined by ````bio-catalog/.bowerrc```` file)


* Start node server on port 8000:

````bash
$ npm start
````

(or, if you have ````nodemon```` installed, run as: ````$ nodemon````)


### Available grunt tasks

````bash
$ grunt jshint
````
````bash
$ grunt sass
````

````bash
$ grunt requirejs
````

````bash
$ grunt i18n
````

````bash
$ grunt copyto
````

````bash
$ grunt mochacli
````


````bash
$ grunt build # 'jshint', 'sass', 'requirejs', 'i18n', 'copyto'
````

````bash
$ grunt test # 'jshint', 'mochacli'
````
