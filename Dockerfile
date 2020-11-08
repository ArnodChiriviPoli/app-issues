FROM nginx:alpine

COPY dist/Tickets/* /usr/share/nginx/html/
