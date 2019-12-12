# Commentify
Commentify is a web based application for music streaming, reviews, and socializing about music.

See our app here: https://commentify1.herokuapp.com/

### Goal
Our goal is to have a user friendly music and social platform where you can listen to your favorites songs, artists, and albums and be able to comment and write reviews on your likes and dislikes.
### Tech
Commentify uses a few different apis and coding languages:

* [Dillinger](Dillinger.io) - Markdown editing
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework
* [NodeSpotifyApi](https://www.npmjs.com/package/node-spotify-api) - A simple to use API library for the Spotify REST API
* [Mysql2](https://www.npmjs.com/package/mysql2) - MySQL client for Node.js with focus on performance
* [Sequelize](https://www.npmjs.com/package/sequelize) - Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server
* [jQuery] - obviously
* [path.js] - different routes for apis
* [nodemon] - many things globally

# Installation
* You will need to install the following to get everything working correctly
* You can npm install globally or locally in a new directory of your choosing
* nodespotify requires a password change to be able to have your own custom log in so change the password in config
* once the dependencies are installed via globally or your own local directory and passwords changed in comnfig to your own custom ones you can start the application
* Once the app has started on the browser of your choosing you will need to log in, for example usser can be your name or anything of your choosing.
* At this point you can navigate the home screen and play around with the app etc.


# Getting started
At the home screen it will ask you to log in with a user name, after which you will arrive on the home screen. There are a few things you can do from the home screen.

![SignIn](/readmePics/pic_01.png)

Home screen for searching your favorite artist, song, etc. You can also add your own review if you would like to as well as read reviews that other users have written. You can use the search icon to locate an artist, song or album, which will populate a few of the hottest songs from that band and any reviews that have been written.

![SignedOn](/readmePics/pic_02.png)

There are a few tabs in which you can navigate too such as reviews, which will populate a new screen with user reviews that have alreday been added as well as an option to write your own review. If you want to go back to home screen you can always clck the same settings tab and go back to song search which will take you back to the home screen.

![Reviews](/readmePics/pic_03.png)

# Future updates
* We started with oauth2 which is an authorization program that works well with google apis, but time didnt permit it perfecting it so we scratched that for the meantime but will ultimately add it later.
* The read me is far from perfect but will be fully detailed with images for each step as well as a cleaner step by step process of installation and getting started once I can figure out the image links/gifs.
* If theres anything that people would like to see in this app in the future let us know and possibly might be added on later.

# Developers
Bikash Kadariya, Eric Fuller, Jae Tran, and Thomas Bradford

____________
 [jQuery]: <http://jquery.com>
 [express]: <http://expressjs.com>
 [node.js]: <http://nodejs.org>
 [nodemon]: <https://www.npmjs.com/package/nodemon>
 [path]: <https://nodejs.org/api/path.html>