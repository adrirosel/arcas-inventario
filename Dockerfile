FROM nginx:alpine
ENV CENTRO="IES Ramon Arcas Meca"
COPY site/ /usr/share/nginx/html/
EXPOSE 80