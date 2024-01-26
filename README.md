# Issue Tracker App

## Overview

This Node.js + EJS application is designed to help users track issues and bugs for different projects. It provides a clean and intuitive user interface for managing projects, creating issues, and efficiently filtering and searching for specific items.

## Features

### 1. [Home Page](#home-page)

- Displays a list of projects.
- Provides a button to create a new project.
- Newly created projects dynamically appear in the project list.

### 2. [Create Project Page](#create-project-page)

- Accepts the following fields to create a project:
  - Name
  - Description
  - Author

### 3. [Project Detail Page](#project-detail-page)

- Accessible by clicking on a project from the home page.
- Displays bugs related to the selected project.
- Users can filter by multiple labels simultaneously.
- Users can filter by author.
- Allows searching by title and description.
- Provides a button to create a new issue.

### 4. [Create Issue Page](#create-issue-page)

- Allows users to create a new issue for a project.
- Accepts the following fields:
  - Title
  - Description
  - Labels (suggests existing labels as the user types)
  - Author

## Getting Started

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/issue-tracker-app.git

2. **Install Dependencies:**

    cd issue-tracker-app
    npm install

3. **Run the Application:**

    npm start
    Open your browser and visit http://localhost:8000 to access the application.

## Dependencies
-Node.js
-Express
-EJS

## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvement, feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License.

## Live website

You can try the live [here](https://calm-fly-mittens.cyclic.app).
