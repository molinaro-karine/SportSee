# SPORTSEE

Project 12 of OpenClassrooms "Front-End Developper".


![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Develop an analytics dashboard with React

Create the consumer dashboard of a sports analytics platform : SportSee, using [React](https://fr.reactjs.org/) and an external API to fetch data.

In this project, I used the chart library [Recharts](https://recharts.org/en-US/) to generate the charts.

The application is under construction : 
- navigation bars (principal and secondary) aren't working now
- optimal resolution must be at least 1024*780px minimum.

## Prerequisites

- You will need [Git](https://git-scm.com/) to clone the repository.
- and [Node](https://nodejs.org/en/) to run the npm commands.

## Dependencies

- [React](https://www.npmjs.com/package/react) v17.0.2
- [react-router-dom](https://www.npmjs.com/package/react-router-dom) v6.2.1
- [recharts](https://www.npmjs.com/package/recharts) v2.1.14
- [prop-types](https://www.npmjs.com/package/prop-types) v15.8.1

Recommended text editor : [Visual Studio Code](https://code.visualstudio.com).

## Install and run the project

- First, follow the instructions to install and run the backend API :

[BackEnd API](https://github.com/Kokotto3000/P9-front-end-dashboard)
- Install the packages

`npm install`

- Finally, run the application (port 3001 by default):

`npm start`

If you are working on Mac, replace in package.json :
- "start": "cross-env PORT=3001 react-scripts start"
by
- "start": "PORT=3001 react-scripts start" .

## Configuration

- To choose between the API data or mocked data, go to src/services/SwitchService.js and replace isMockedData with true to use local mocked data or false to use API data.

- To switch between the two available user profiles (12 or 18), the two URL are :

- `http://localhost:3001/12`
- `http://localhost:3001/18`

### Documents

You can find the application mock-up on [Figma](https://www.figma.com/file/BMomGVZqLZb811mDMShpLu/UI-design-Sportify-FR?node-id=0%3A1),
and the Kanban board with User Stories of the project on [Notion](https://www.notion.so/Tableau-de-bord-SportSee-6686aa4b5f44417881a4884c9af5669e).









