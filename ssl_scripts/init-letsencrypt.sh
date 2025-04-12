#!/bin/sh

# Replace with your domain and email
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