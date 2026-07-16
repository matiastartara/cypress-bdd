# Cypress BDD TypeScript Testing Framework 🚀

This repository contains a test automation framework built using **Cypress**, **TypeScript**, and **Cucumber (BDD)**. It is configured to run tests both locally and inside containerized environments using **Docker**.

---

## 📋 Table of Contents
* [🛠️ Prerequisites](#️-prerequisites)
* [📂 Project Structure](#-project-structure)
* [⚙️ Installation & Setup](#️-installation--setup)
* [💻 Running Tests Locally](#-running-tests-locally)
* [🐳 Running Tests in Docker](#-running-tests-in-docker)
* [🤖 GitHub Actions CI/CD](#-github-actions-cicd)
* [📝 Best Practices](#-best-practices)

---

## 🛠️ Prerequisites
Before running tests, ensure you have the following installed:
* [Node.js](https://nodejs.org/) (v18+ or v20+ recommended)
* [Docker](https://www.docker.com/) (Required for running tests in containers)

---

## 📂 Project Structure
The project follows the Page Object Model (POM) pattern combined with Cucumber Step Definitions:

```text
├── cypress/
│   ├── e2e/
│   │   └── features/
│   │       └── login.feature         # Gherkin scenario definitions
│   ├── fixtures/
│   │   └── example.json              # Static test data
│   ├── pages/
│   │   └── LoginPage.ts              # Page Object class (selectors & actions)
│   ├── support/
│   │   ├── step_definitions/
│   │   │   └── login.ts              # Cucumber step implementations
│   │   ├── commands.ts               # Custom Cypress commands
│   │   └── e2e.ts                    # Global configurations/imports
├── Dockerfile                         # Container build definition
├── docker-compose.yml                 # Multi-container run definition
├── .dockerignore                      # Docker ignore list
├── cypress.config.ts                  # Cypress configuration file
├── tsconfig.json                      # TypeScript configuration
├── package.json                       # Scripts and project dependencies
└── README.md                          # Project documentation
```

---

## ⚙️ Installation & Setup
To install all project dependencies, run:

```bash
npm install
```

### 🔐 Environment Configuration
Before running the tests, create a `.env` file in the root of the project to store your credentials (this file is excluded from Git):
```env
USER_NAME=your_username_here
USER_PASSWORD=your_password_here
```

---

## 💻 Running Tests Locally

You can run the tests using either the Cypress GUI Test Runner or via the terminal:

### 1. Interactive Mode (Cypress GUI) 🖥️
To open the Cypress Test Runner interface:
```bash
npm run open
```
*Alternatively:* `npx cypress open`

### 2. Headless Mode (CLI Execution) ⚡
To run all tests in headless mode (defaults to Electron):
```bash
npx cypress run
```

To run specifically using Chrome:
```bash
npm run cypress:run:chrome
```
*Alternatively:* `npx cypress run --browser chrome`

---

## 🐳 Running Tests in Docker

Run tests inside a Docker container using pre-installed browsers to guarantee environment consistency.

### 1. Run via Docker Compose (Recommended) 🐳
Build the image and run the test suite:
```bash
docker-compose up --build
```
*Note:* Screenshots and video recordings generated during headless execution are automatically mounted to the local `./cypress/screenshots` and `./cypress/videos` folders.

### 2. Run via plain Docker commands 🚢
Build the image:
```bash
docker build -t cypress-bdd-tests .
```

Run the container:
```bash
docker run -it --rm cypress-bdd-tests
```

---

## 🤖 GitHub Actions CI/CD
This project includes a GitHub Actions workflow configured under `.github/workflows/cypress.yml` to automatically build, run, and upload test assets (screenshots & videos) on every push and pull request to the `main` and `develop` branches.

### Configured Secrets 🔑
Since the local `.env` file is ignored and not committed to Git, you must define the following secrets in your GitHub Repository settings (**Settings > Secrets and variables > Actions**):

1. **`USER_NAME`**: The test runner username.
2. **`USER_PASSWORD`**: The test runner password.

---

## 📝 Best Practices

1. **Page Object Model (POM)**:
   * Keep selectors and interaction logic inside page classes (in `cypress/pages/`).
   * Step definitions (`cypress/support/step_definitions/`) should only invoke methods from the page objects.

2. **Cucumber Scenarios**:
   * Keep Gherkin scenarios business-focused. Avoid technical jargon like "I click on the button with ID #submit".
   * Use reusable steps.

3. **Cypress Recommendations**:
   * Use `data-testid` or `data-cy` attributes for robust element selectors.
   * Avoid arbitrary wait times (`cy.wait(5000)`); rely on Cypress built-in auto-waiting and assertions.



