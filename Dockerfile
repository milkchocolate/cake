FROM node:lts

EXPOSE 8080
WORKDIR /app
COPY ./ ./

RUN npm install --production

ENTRYPOINT ["node", "index.js"]