## Project Title: Research and Project Management Web Application

## Project Overview

This project is a web application designed for managing research and projects. It provides features for creating, editing, and viewing both research projects and regular projects. Users can manage their projects and research within a user-friendly interface.

## Features

* **User Authentication:** Allows users to create accounts, login, and manage their data.
* **Project Management:**
    * Create new projects.
    * Edit existing projects.
    * View a list of all projects.
    * Update project information.
* **Research Management:**
    * Create new research projects.
    * Edit existing research projects.
    * View a list of all research projects.
    * Update research information.
* **Homepage:** A landing page for users to view the application's main features.
* **Student Homepage:** A dedicated homepage for student users.
* **Supabase Integration:** Utilizes Supabase for database management and user authentication. 

## Installation

This project uses Node.js and npm for package management. To set up the project, follow these steps:

1. **Install Node.js and npm:** Download and install the latest version of Node.js from the official website [https://nodejs.org/](https://nodejs.org/).
2. **Navigate to the project directory:** Open your terminal or command prompt and navigate to the project's root directory.
3. **Install dependencies:** Run the following command to install all necessary packages:
   ```bash
   npm install
   ```
4. **Set up Supabase:**
    * Create a Supabase account and project.
    * Configure your Supabase connection details in the `config/supabaseClient.js` file.

## Usage

1. **Start the development server:** After installing dependencies, run the following command to start the development server:
   ```bash
   npm start
   ```
2. **Access the application:** Open your web browser and navigate to `http://localhost:3000` to access the application.

**Note:**  
This project leverages React.js for frontend development. Ensure you have a basic understanding of React.js to effectively work with the codebase.
