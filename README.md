# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## For development

To see changes immediately in development environment run two commands:

### `docker build -t frontend -f Dockerfile.dev .`

This will build docker image based on Dockerfile.dev with a tag of frontend

### `docker-compose up`

This will run docker image and create shortcut between current working dir and docker image /app folder. 
So changes in local files will be visible for docker files
