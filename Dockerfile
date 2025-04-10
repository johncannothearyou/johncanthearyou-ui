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

# Copy built app
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Create script to renew certificates
COPY init-letsencrypt.sh /init-letsencrypt.sh
RUN chmod +x /init-letsencrypt.sh

EXPOSE 80 443

# Use an entrypoint script
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
