FROM node:alpine
WORKDIR /app
COPY . .
RUN npm ci --verbose
RUN npm run build
CMD ["npm", "start"]