# Build
FROM node:alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Run
FROM nginx:alpine
RUN apk add --no-cache certbot certbot-nginx
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY ssl_scripts/init-letsencrypt.sh /init-letsencrypt.sh
RUN chmod +x /init-letsencrypt.sh
COPY ssl_scripts/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
EXPOSE 80 443
ENTRYPOINT ["/entrypoint.sh"]
