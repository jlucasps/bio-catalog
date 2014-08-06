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
<br>

**jshint files**
````bash
$ grunt jshint
````

<br>
**Compile Sass file into CSS files**
````bash
$ grunt sass
````
- It uses [Node-sass](https://github.com/sass/node-sass), a library that provides binding for Node.js to [libsass](https://github.com/sass/libsass)
- Added option ````outputStyle: 'compressed'```` to compress files

<br>
````bash
$ grunt requirejs
````

<br>
````bash
$ grunt i18n
````

<br>
````bash
$ grunt copyto
````

<br>
````bash
$ grunt mochacli
````

<br>
````bash
$ grunt build # 'jshint', 'sass', 'requirejs', 'i18n', 'copyto'
````

````bash
$ grunt test # 'jshint', 'mochacli'
````
