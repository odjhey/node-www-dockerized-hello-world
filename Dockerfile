
FROM node:14

RUN apt update && apt install -y netcat

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
COPY . .

# If you are building your code for production
# RUN npm ci --only=production

EXPOSE 8080

CMD node index.js
