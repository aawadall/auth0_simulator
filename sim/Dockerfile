# Use Node 18.5 alpine 
FROM node:18.5-alpine3.16

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

ENTRYPOINT [ "npm", "start" ]