# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Setup Instructions
Clone the Repository: If you haven't already, clone the project repository.

git clone <your-repo-url>
cd <your-project-folder>


## Install Dependencies: Run the following command in your terminal to install all the required packages, including react-router-dom, pocketbase, and tailwindcss.

npm install


## Configure PocketBase:

Ensure your PocketBase server is running.

Update the PocketBase URL in your src/context/AuthContext.tsx file to point to your instance.

Run the Application: Start the development server.

## npm start


The application will be available at http://localhost:3000 by default.

## Assumptions & Issues
PocketBase: This application assumes you have a PocketBase instance running and a users collection configured with standard fields (email, password, username, name).

## API Calls: All authentication logic is handled within src/context/AuthContext.tsx using the PocketBase SDK.

User Experience: For simplicity, the application uses a JavaScript alert() for success and failure messages. For a production-level application, it is recommended to replace this with a custom modal or toast notification to provide a better user experien
