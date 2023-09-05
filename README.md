# Tech Blog Post

## Description

Working app using the Model-View-Controller paradigm.

In this app anyone can create a user and post a blog article, also register users can add comments to blogs from other people

## Tech stack

- Node.js
- Express.js
- Sequilize
- mysql2
- SQL
- Javascript
- handlebars
- boostrap
- jquery

## Installation

Load <pre><code>npm i</code></pre> to install all the dependencis then log into your mysql databases, and run the following comands from the db folder

<pre><code>source schema.sql </code></pre>

if you see three tables populated with data after query.sql you are good to go!

## Test

Test by doing the following

- Register as a New user
- logout and log in with your credentials
- view each posts as a logged in user to comment
- on dashboard, edit, delete and create new posts
- wait 10 minutes inside the dashboard as innactive and then try to performed any actions- (expected behaviour is to failed and taken back to login screen)

## License

<img src="https://img.shields.io/static/v1?label=License&message=MIT&color=GREEN"/>
