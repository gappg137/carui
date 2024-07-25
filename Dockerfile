
FROM node:lts-alpine


WORKDIR /app


COPY package*.json ./


RUN npm install


COPY . .


RUN npm install -g react-scripts


RUN npm run build


EXPOSE 80


CMD ["npm", "start"]