# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

##  Project Overview
This project is built using React, TypeScript, and follows the MVC (Model-View-Controller) architecture. The primary focus of the project is to implement file upload functionality, supporting drag-and-drop for file selection. The files are uploaded to a designated store, and routing is properly set up to handle file uploads.

## Tech Stack
Frontend: React, TypeScript, Tailwind CSS
Architecture: MVC (Model-View-Controller)
Routing: React Router for navigation
File Upload: Custom drag-and-drop file upload functionality

## Features
File Upload: Allows users to upload files using a drag-and-drop interface.
Drag-and-Drop: Easy file selection by dragging files into the designated area.
Routing: Proper routing functionality to navigate to different sections (such as the upload page).
Store Integration: Files are uploaded to a designated store (can be a cloud storage or local server).

- Setup & Installation
To run this project locally, follow these steps:
Clone the Repository:
bash
Copy code
git clone <repository-url>


- Navigate to the Project Directory:
bash
Copy code
cd <project-folder>


- Install Dependencies:
bash
Copy code
npm install


- Run the Project:
bash
Copy code
npm run dev


- Open your browser and visit http://localhost:3000 (or the appropriate port based on your configuration).


## Folder Structure
/src: Contains all the source code.
/commonComponents: Reusable UI components.
/constants: Business logic for handling file uploads.
/models: Data models for file-related operations.
/routes: Routing configuration for various app sections.
/feature: React components that render the UI for each route.
