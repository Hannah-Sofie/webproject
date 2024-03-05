FROM node:18-alpine

WORKDIR /journal-backend

COPY . .

RUN npm ci

EXPOSE 3001

CMD ["npm", "start"]