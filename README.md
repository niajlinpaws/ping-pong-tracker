## Ping Pong Tracker
A ping pong tracking application where players can view leaderboard, view match statistics
and add new game scores.

## Guidelines
Following guidelines are put into consideration while developing:
- Built on Javascript
- Frontend uses ReactJS
- Frontend linting extended with create-react-app
   using react-app-rewired
- Frontend test suite built using jest, enzyme
- Backend uses Node, ExpressJS
- Backend linting done using eslint
- Backend test suite built using mocha, should, supertest
- Database used: MongoDB
- Database seeding automatically starts with server
- Communication between frontend and backend done via REST APIs
- GIT for version control

The project has been splitted into client and server sections
for seperation of concerns.

Both sections consists of package.json to: 
- install application & development dependencies
- run test suites 

## How to setup the project:
In the root project directory,
follow the steps below to setup the project

```bash
npm i
```

```bash
cd server
npm i
touch .env
```
inside .env file edit:

MongoDB connection string URL

`MONGO_URI=<YOUR_MONGODB_CONNECTION_STRING>`

By default the server runs at port 5000
Alternatively, can the set the port to start the server inside .env

`PORT=<YOUR_PORT_NUMBER>`

```bash
cd ../client
npm i
touch .env
```
inside .env file edit:

Set the base API URL with the port number set inside server
if no port number is set, then set the port to 5000

`REACT_APP_BASE_URL=http://localhost:<PORT_NUMBER>`

## How to start the project:

```bash
cd ../
```

In the root project directory, you can run:

### `npm start`
This will start the client and server concurrently.

Alternatively, the frontend and backend can be run
individually:

Backend:
### `npm run backend`
or 
```bash
cd server
npm start
```

Tests:
```bash
npm test
```
Frontend:
### `npm run frontend`
or 
```bash
cd client
npm start
```
Tests:
```bash
npm test
```

I look forward to the suggestions. 
