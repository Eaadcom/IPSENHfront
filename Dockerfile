# Stage 1 - Run the Prod Build with Nginx
FROM nginx:alpine
COPY /dist/ipsenh-frontend /usr/share/nginx/html
