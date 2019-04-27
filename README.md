# Pet Single Page Application

**Required tools**:

* _Angular 7.1.4_
* _Node 8.11.3_
* _MySQL Community Server 8.0.13_

### Installation

The first part of the installation is about getting all the dependencies both for the FrontEnd and the BackEnd part of the application.

#### FrontEnd

We need to navigate to our _FrontEnd_ project folder: `..\petSPA\frontend\petSPA`

once inside the folder, we run: `npm install`

after that, all the `node_modules` dependencies should be installed, we can then proced by building the project using: `ng serve`

inside the same folder.

#### Backend

Same goes for the _BackEnd_.

First of all, we navigate to: `..\petSPA\backend`

We run: `npm install`

as soon as the installation is complete we can run our _Node server_ by using: `npm run dev`

#### Database

The database used by the application is a _MySQL database_.

The database connection configuration can be found in the `..\petSPA\backend\app\controllers\database.js` file.

This file also provide a method for the creation of the table that is needed to store the data.


