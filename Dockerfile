FROM node:14.17.6-alpine

WORKDIR /aicamera-api-sample-frontend
COPY . .

RUN npm ci

ENV HOST 0.0.0.0
EXPOSE 3333

CMD ["npm", "run", "dev"]
