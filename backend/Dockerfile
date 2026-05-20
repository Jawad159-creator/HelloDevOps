# Use a lightweight Node image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your application code
COPY . .

# Expose the port your backend runs on (usually 3000, 5000, or 8080)
EXPOSE 5000

# Start the application
CMD ["node", "server.js"]