## Expensify App [(Live Version)](https://expensify-app-tadynas.herokuapp.com)

React.js project that tracks user expenses.

![Expensify App](https://i.imgur.com/GOJUUvt.png)


## Getting Started

Following section will provide steps on how to setup the project locally

### Prerequisites

To run this project you need to have node.js

```sh
npm install npm@latest -g
```

### Installation

1. Clone the repo

```sh
git clone https://github.com/Tadynas/expensify-app.git
```

2. Navigate to project directory

```sh
cd expensify-app
```

3. Install dependencies

```sh
yarn install
```

4.  Start project

```sh
yarn start
```

It will run the app in the development mode.
Open [http://localhost:8080](http://localhost:8080/) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

## Tools

1. React.js
2. Redux
3. React Router
4. Moment.js
5. Firebase
6. SASS
7. Express.js
8. Babel
9. Webpack
10. Jest

## API

1. [Firebase](https://www.firebase.com)

## Keys

Project uses Firebase for authentication and database. To setup project with Firebase you need to:
1. Create [Firebase](https://www.firebase.com) account
2. Create Web App and copy config keys
3. Create .env.development file in project root directory
4. Add following lines of code
```
FIREBASE_API_KEY=YOUR_PERSONAL_KEY
FIREBASE_AUTH_DOMAIN=YOUR_PERSONAL_KEY
FIREBASE_DATABASE_URL=YOUR_PERSONAL_KEY
FIREBASE_PROJECT_ID=YOUR_PERSONAL_KEY
FIREBASE_STORAGE_BUCKET=YOUR_PERSONAL_KEY
FIREBASE_MESSAGING_SENDER_ID=YOUR_PERSONAL_KEY
FIREBASE_APP_ID=YOUR_PERSONAL_KEY
```
Additionally, you can add Firebase project for testing:
1. Create Firebase Web App project for testing
3. Create .env.test file in project root directory
4. Add the same lines of code as above and provide testing web app keys

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and deployed to [Heroku](heroku.com).
