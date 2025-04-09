# JOHNCANNOTHEARYOU-UI

johncannothearyou-ui is a React application that will serve as a user interface for John Stockton's portfolio website.

- https://johncannothearyou.com

## Technologies Used

Node.js: JavaScript runtime environment

- https://nodejs.org

React: UI framework

- https://react.dev

Vite: Bundler and local develoopment server

- https://vite.dev

Vitest: Testing framework

- https://vitest.dev

Docker: Containerization

- https://www.docker.com/

Nginx: Static web server

- https://nginx.org

### Installation

```bash
git clone git@github.com:johncannothearyou/johncanthearyou-ui.git
cd johncannothearyou-ui
npm install
```

### Development Commands

```bash
npm run dev
npm run test
npm run build
```

## Project Structure

johncannothearyou-ui (Project root)
├── src (Source code)
│ ├── components (Reusable React components)
│ ├── pages (Single use React pages)
│ ├── main.jsx (React application logic entry point)
├── docker-compose.yml (Configuration for easy deployment)
├── Dockerfile (Builds the Docker image)
├── eslint.config.js (ESLint rules)
├── index.html (HTML template)
├── nginx.conf (Nginx configuration, for the production machine)
├── package.json (Project dependencies and scripts)
├── start-with-ssl.sh (Scripts for generating SSL certificates on the production machine)
├── vite.config.js (Vite configuration)

## Deployment

The project is deployed to the production machine using Docker and Docker Compose.
Simply log into the host machine and run the following commands:

```bash
sudo docker compose down
sudo docker compose build --no-cache
sudo docker compose up -d
```

See the docker-compose.yml and Dockerfile for more information.

Ensure that the DNS records for the domain are pointing to the production machine and that the router is properly forwarding WAN IP traffic to the production machine's LAN IP address.
