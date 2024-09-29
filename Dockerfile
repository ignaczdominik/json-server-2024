FROM node:20-alpine3.17

WORKDIR /app

RUN npm i json-server@0.17.4 multer body-parser@1.19.0

EXPOSE 3000
CMD ["node", "index.js"]
