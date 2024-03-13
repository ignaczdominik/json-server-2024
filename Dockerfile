FROM node:20-alpine3.17

WORKDIR /app

RUN npm i json-server@0.17.4 multer body-parser@1.19.0

EXPOSE 80
RUN ls -la
RUN cat package.json
CMD ["node", "index.js"]