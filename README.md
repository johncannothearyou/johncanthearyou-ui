# Quick Start

You can easily run johncanthearyou-ui directly on your laptop or through containers

- Local:
  - Ensure `node` and `npm` are installed
  - Run `npm clean-install` to reinstall dependencies
  - Run `npm run dev` to start local development
- Containerized:
  - Ensure `docker` is installed and running
  - Run `docker compose up -d` (make sure to use `sudo` if running on Linux)

The application will now be running on `localhost:8081`

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
