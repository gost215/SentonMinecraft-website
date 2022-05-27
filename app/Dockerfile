#STAGE 1
FROM node:latest-alpine AS build
WORKDIR /app/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

#STAGE 2
FROM nginx:latest-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/trpp-project /usr/share/nginx/html
