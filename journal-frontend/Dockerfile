FROM node:18-alpine

WORKDIR /journal-frontend

COPY . .

RUN npm ci

EXPOSE 8083

CMD ["npm", "start"]
