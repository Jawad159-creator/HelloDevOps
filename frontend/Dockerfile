FROM node:20-alpine
WORKDIR /app

# 1. Copy package files first to install dependencies
COPY package*.json ./
RUN npm install

# 2. Copy the REST of your project files
COPY . .

# 3. Now run the build
RUN npm run build