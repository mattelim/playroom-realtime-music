FROM node:lts-bullseye-slim

# Create app directory
WORKDIR /usr/src/app

# Set NODE_ENV to production
ENV NODE_ENV=production

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# RUN npm install
# If you are building your code for production
RUN npm ci --omit=dev

# Bundle app source
COPY dist ./dist
COPY .env ./

EXPOSE 8094
CMD [ "node", "dist/index.js" ]
