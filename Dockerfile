FROM nginx:alpine


# create nginx.cof
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY ./dist/ipsenh-frontend /usr/share/nginx/html


EXPOSE 80

