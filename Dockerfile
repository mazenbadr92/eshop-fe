# Stage 1
FROM node:10-alpine as build-step
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app/
RUN npm install -g @angular/cli@9.0.6
COPY ./package*.json /usr/src/app/
RUN npm install
COPY . /usr/src/app/
RUN ng build --prod --aot
# Stage 2
FROM nginx:1.17.1-alpine
COPY --from=build-step /usr/src/app/dist/eshop-fe /usr/share/nginx/html
