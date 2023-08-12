# Bookfolio

Bookfolio is a full-stack web application that enables users to manage their personal book collections. The application includes user authentication, a user-friendly dashboard, book management functionalities, and search functionality. The front end is built using Vue.js and Vuetify, while the back end is developed using Node.js, Express, Sequelize, and PostgreSQL.

## **Database** :bookmark_tabs: 

[Database Link](https://drawsql.app/teams/bayan-1/diagrams/bookfolio)


![image](https://github.com/bayan2002/Bookfolio/assets/88391328/2629a3d6-2598-4473-8164-275ff97f8e30)

# Instructions to Run the Application Locally:

To test the application on your local machine, follow these steps:

# Prerequisites

Ensure you have [Node.js](https://nodejs.org/) and [PostgreSQL](https://www.postgresql.org/) installed

# Setup

1- Clone the repository to your local machine using the following command:

```sh
git clone https://github.com/bayan2002/Bookfolio.git
```

2- Navigate to the project directory:

```sh
cd Bookfolio
```

3- Install the required dependencies for the frontend and backend:

```sh
# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install
```

4-Create a .env file in the backend directory and set the following environment variables:

```sh
DEV_DATABASE_URL=postgres://username:password@localhost:5432/database_name
DATABASE_URL=
JWT_SECRET=your-secret-key
```

Replace username, password, and database_name with your PostgreSQL credentials and desired database name. Also, set a secure value for JWT_SECRET to handle JSON Web Tokens.

# Running the Application

1- Start the backend server:

```sh
cd server
npm run dev
```

The backend server will run on http://localhost:5000 by default.

2- Start the frontend development server:

```sh
cd client
npm run dev
```

The frontend server will run on the port mentioned in the console logs. Check the console output after running the above command to find the exact URL

3- Open your web browser and navigate to the provided URL to access the application.

## **Technologies** :computer: :-

- FrontEnd: **Vue.js & Vuetify**
- BackEnd: **Node JS & Express JS**
- Database: **PostgreSQL**
- OMR: **Sequelize**
