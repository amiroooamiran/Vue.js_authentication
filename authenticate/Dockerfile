# Use a Node.js image with the latest LTS version as the base image
FROM node:lts-alpine

# Set the working directory inside the container
WORKDIR /vue_authentication

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files to the working directory
COPY . /vue_authentication

# Build the Vue.js project
RUN npm run build

# Expose port 80 for the Vue.js application
EXPOSE 80

# Command to run the Vue.js application
CMD ["npm", "run", "serve"]
