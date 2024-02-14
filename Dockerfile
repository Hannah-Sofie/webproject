FROM node:18-alpine
WORKDIR /journal-web
COPY journal-web /journal-web
RUN npm i
CMD ["npm", "start"]