# Use official Node.js image as the base image
FROM node:20.11.1

# Set the working directory inside the container
WORKDIR /news-aggregator

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Expose port 3000 to the outside world
EXPOSE 3000

# Set environment variables
ENV NODE_ENV=production

# Command to run the application
CMD ["npm", "start"]
