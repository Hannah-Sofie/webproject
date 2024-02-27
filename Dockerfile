FROM node:18-alpine
WORKDIR /journal-web

COPY journal-web/. .

RUN npm ci
CMD ["npm", "start"]
