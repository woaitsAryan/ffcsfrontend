FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY build/ .

RUN npm install -g serve

EXPOSE 3005

CMD ["serve", "-s", "build", "-l", "3005"]