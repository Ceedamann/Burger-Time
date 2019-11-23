# Burger Time!
A Burger Eatin' App
Built with MySQL, Node, Express, Handlebars and a homemade ORM.

## Live Project

The app can be found [here](https://fast-mountain-22416.herokuapp.com/).

## About the App

This is a simple full-stack app. Its front-end utilizes HTML, CSS, and the Bootstrap framework, and uses Handlebars for HTML templating. Its back-end is built with Node.js and Express.

Users can view all available burgers, or add a burger of their own. They can choose to eat a burger, and the burger will be moved from the "Now Serving" section to the "Burgers Eaten" section. The burgers are also added and updated in a mySQL database.

## MVC Design Pattern
Eat Da Burger is an MVC app, which means it assigns objects in the application to one of the three listed roles (model, view, or controller), then defines the ways that the different parts of the application interact with each another. 
- <b>The View:</b>
The View Object defines what the user sees. It displays data on the front-end from the app's Model, and updates that data via any news from the Controller. User input into the View is sent via the Controller to the Model.

- <b>The Controller:</b>
The Controller Object transfers data between the View and the Model. Any user inputs that cause data changes are communicated from the View to the Model by the Controller, and any data changes in the Model are communicated back to the View for display by the Controller. 

- <b>The Model:</b>
The Model Object is what manages the data. Data can be created or changed in the Model, and those changes are communicated to the View by the intermediary Controller. User input is sent to the Model from the View via the Controller.

## How it works
This app has 3 basic CRUD functions using a homemade ORM.
1. READ all burgers in the database and display them in the View using Handlebars.
2. UPDATE a specific burger's "devoured" property from "false" to "true" (signifying that the burger has been eaten), and move it into the "eaten" column using Handlebars.
3. CREATE a new burger using Express to insert a new burger into the mySQL database, then display the new burger in the "now serving" column.

## Installing the App

To run this app locally on your computer:

- Clone this repository
- Install the dependencies using    
```npm install```
- Run the node server locally using    
```node server.js```
- Your app should be listening on your local host.

### Local Database 
To run this app locally, you will need to initialize a local database. Using an SQL client like dBeaver, run the following statement:

<pre>
  CREATE DATABASE burger_db;
  USE burger_db;
  </pre>

Then create a table called "burgers".
<pre>
  CREATE TABLE burgers
  (
    id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
  );
  </pre>

  You can populate the table with some starter data similar to the following code. The "devoured" property is set to false by default.

  <pre>
INSERT INTO burgers (burger_name, devoured) VALUES ('Royale w/Cheese', true);
INSERT INTO burgers (burger_name) VALUES ('Le Big Mac ');
INSERT INTO burgers (burger_name) VALUES ('Rodeo burger');
</pre>

### Dependencies
 
 This app is dependent on 
 <ul>
    <li> <b>express</b> - a Node.js web application framework</li> (https://www.npmjs.com/package/express).</li>
    <li><b>dotenv</b> - retrieves mySQL password from a .env file</li> (https://www.npmjs.com/package/express).</li>
    <li><b>mySQL</b> - connects you to your database via the command line</li> (https://www.npmjs.com/package/express).</li>
    <li><b>express-handlebars</b> - lets you use handlebars to create HTML templates</li> (https://www.npmjs.com/package/express-handlebars)</li>
 </ul>

## Authors

* **Carl Robinson Jr.** - [Github](https://github.com/Ceedamann)


