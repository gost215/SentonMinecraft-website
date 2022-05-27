#STAGE 1
FROM node:latest AS build
WORKDIR /app/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

#STAGE 2
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/src/app/dist/trpp-project /usr/share/nginx/html
