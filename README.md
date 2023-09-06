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

Then you can run the application and test it!

<pre><code>npm run start </code></pre>

## Test

Test by doing the following

- Register as a New user
- logout and log in with your credentials
- view each posts as a logged in user to comment
- on dashboard, edit, delete and create new posts
- wait 10 minutes inside the dashboard as innactive and then try to performed any actions- (expected behaviour is to failed and taken back to login screen)

## screenshots

![login Page](/screenshots/signup%20page.png)
![empty stage Page](/screenshots/empty%20stage%20on%20user%20dashboard.png)
![User Dashboard](/screenshots/User%20dashboard.png)
![homepage](/screenshots/homepage.png)
![Single blog Page](/screenshots/blog%20page.png)

## License

<img src="https://img.shields.io/static/v1?label=License&message=MIT&color=GREEN"/>
