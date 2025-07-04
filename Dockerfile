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
COPY start-with-ssl.sh /start-with-ssl.sh
RUN chmod +x /start-with-ssl.sh
EXPOSE 443
ENTRYPOINT ["/start-with-ssl.sh"]
