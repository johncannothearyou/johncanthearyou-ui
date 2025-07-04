#!/bin/sh

# Check if certificates exist, if not, run the init script
if [ ! -d "/etc/letsencrypt/live" ]; then
  domain="johncannothearyou.com"
  email="johncannothearyou@gmail.com"

  # Stop nginx if it's running
  nginx -s stop || true

  # Get the certificate
  certbot certonly --standalone \
    --agree-tos \
    --non-interactive \
    --email $email \
    --domain $domain \
    --domain www.$domain
fi

# Add a cron job to renew the certificate
echo "0 12 * * * certbot renew --quiet" | crontab -

# Start Nginx
nginx -g "daemon off;"
