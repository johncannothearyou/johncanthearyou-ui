#!/bin/sh

# Check if certificates exist, if not, run the init script
if [ ! -d "/etc/letsencrypt/live" ]; then
  /init-letsencrypt.sh
fi

# Add a cron job to renew the certificate
echo "0 12 * * * certbot renew --quiet" | crontab -

# Start Nginx
nginx -g "daemon off;"