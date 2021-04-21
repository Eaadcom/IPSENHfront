FROM nginx:alpine

COPY ./dist/ipsenh-frontend /usr/share/nginx/html

EXPOSE 80

