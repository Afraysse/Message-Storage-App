# SIMPLE MESSAGING APP

This is a simple messaging-database storage app built using:

- **Client**: ReactJS, Semantic-UI-React
- **Server**: Express, Mongoose, MongoDB

## To start the server & connect to MongoDB

First, make sure you've developed a cluster using MongoDB Atlas and whitelisted your IP address. Be sure to save your connection method string into your `.env` file, as `MONGO_ROUTE`. Also be sure to include `PORT` for the server to run on.

Then to start the server, open a new window in the terminal, navigate to the file `./server` and run the command:

`node server.js`

## To start the front end

Be sure to start the server first, otherwise your DB won't work.

To start the front end, run the command:

`npm start`

## Gap Areas

Need to have frontend start up on a different Port - `Concurrently` is installed and theoretically should allow the front and backend to be start but it currently tries to run both the front end and backend on the same Port, causing chaos. I'm working on a fix for this.
