# Use the official Cypress browsers image as base (contains Node.js and pre-installed browsers)
FROM cypress/browsers:node-20.14.0-chrome-125.0.6422.141-ff-126.0.1-edge-125.0.2535.85-1

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

# Install project dependencies, including Cypress and TypeScript
RUN npm ci

# Copy the rest of the application files
COPY . .

# Default command to run tests (can be overridden in docker-compose or command line)
CMD ["npx", "cypress", "run"]
