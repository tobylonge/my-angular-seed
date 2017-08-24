# `Gate Pass` — Front-end for the app 

latest dev version: https://gatepass-fe.herokuapp.com/

## What is this repository for?

In this repository you will find angular web app for gatepass.

## How do I get set up?
#### Install Git
You need git to clone the `gatepass-fe` repository, You can get git from [here][git].

##### Install node and npm
Go to The [Node.js](https://nodejs.org/en/) website for installation instructions

##### Clone `gatepass-fe`
```
git clone https://github.com/devcenterco/gatepass-fe.git
cd gatepass-fe
```

##### Install Dependencies
We have two kinds of dependencies in this project:
* We get the tools we depend upon via `npm`, the [Node package manager][npm].
* We get the Angular code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`. After that, you should find out that you have
two new folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the Angular framework files

### Run the Application

To run the project use:
```
npm start
```

Now browse to the app at [`localhost:8000`]
