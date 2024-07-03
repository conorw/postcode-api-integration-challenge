# Postcode API Integration Challenge

## Getting Started

### Prerequisites

1. Node.js - https://nodejs.org/en/download/
2. pnpm - https://pnpm.io/installation

### Installation

To get started, clone the repository and run the following commands:
`pnpm install`
`pnpm dev`

The app should now be running on http://localhost:5173/

### Testing

To run the tests, run the following command:
`pnpm test`

### Hosting

The app is hosted on Vercel at the following URL: https://postcode-api-integration-challenge.vercel.app/

## Introduction

Your task is to use this open source API: https://postcodes.io/ to satisfy the given user story.
User Story:
As a user,
I want to search for a postcode in the UK
So that I can retrieve its geographical information and have it displayed to me.

## Acceptance Criteria

- Given a postcode is provided
- When the user searches for a postcode
- Then the geographical information of that postcode should be displayed

## My Approach

### Browser application

To make the funcionality more accessible to users cross platform, a browser app was chosen.

### Backend

The postcodes.io API does not require an API key, so a backend is not strictly required. The API could be called directly from the frontend.
However, to improve performance and future security, a simple backend could be implemented in the future. The backend would utilise server side rendering for initial performance gains and caching improvements.
However, for the purposes of this challenge no backend was implemented.

### Frontend

The frontend is a simple svelte app (alternatives include Vanilla js, PHP, react etc). If no search params are given, the user will be able to input the postcode and submit the request to the server. The information will then be displayed on the page.
The information will be displayed using a simple map based interface, utilizing open source map libraries.

### Typescript
To help with type safety and code readability, Typescript was used.

### Mapping Library

An open source mapping library and open source layer will be used to display the geographical information. The library will be chosen based on ease of use and performance.

### Input Validation

The input is validated on the frontend only.

### Error Handling

Errors are handled on the frontend. The user will be notified of any errors that occur.

### Testing

This project uses vitest for testing. The tests are run using the command `pnpm test`. The tests are located in the tests folder.

### Styling
Mimimal styling was used for this project due to time constraints. Any styling was performed using component scoped CSS in the Svelte components.

### Hosting

The app can be hosted on any platform that supports static web pages. For this example, the app is currently hosted on Vercel at https://postcode-api-integration-challenge.vercel.app/
