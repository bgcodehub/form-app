# Form-App

## Overview

Designed to securely collect client information and trigger an Azure DevOps pipeline with the provided data. Built using Node.js and Express for the backend, with EJS for templating. It's designed to handle form submissions securely, process the data, and trigger a pipeline without storing any sensitive information.

## Purpose

The primary purpose of this application is to:

- Collect sensitive client information through a secure, user-friendly web form.
- Trigger an Azure DevOps pipeline using the submitted data.
- Ensure that the sensitive data is not stored persistently and is securely handled throughout its lifecycle.

## How It Works

### Frontend

- The frontend consists of a simple form designed using HTML, CSS, and JavaScript.
- The form is rendered using EJS templates and styled to provide a user-friendly interface.
- Client-side JavaScript is used for basic validation before form submission.

### Backend

- The backend is developed using Node.js and Express.
- When the form is submitted, the server receives the data, processes it, and triggers an Azure DevOps pipeline.
- The data is temporarily held in memory, and no persistent storage of sensitive data is performed.
- The server uses Axios to make an API call to Azure DevOps, passing the form data as parameters to the pipeline.

### Security

- HTTPS is used to encrypt data in transit.
- The application includes measures to prevent common web vulnerabilities like CSRF and injection attacks.
- Sensitive data is neither logged nor stored persistently.

## Getting Started

To run this application:

1. Clone the repository.
2. Navigate to the project directory and run `npm install` to install dependencies.
3. Start the server using `node app.js`.
4. Access the application at `http://localhost:3000`.

