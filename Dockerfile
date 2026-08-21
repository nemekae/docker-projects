FROM node:22

WORKDIR /app

# Copy dependencies, the source code and expose the port

COPY package*.json .

RUN npm ci

COPY index.js index.js

EXPOSE 3003

CMD ["node", "index.js"]