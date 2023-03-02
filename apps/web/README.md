# Morphum Web Front-end

This project loads up the test-site in an iframe and allows you to customize the look and feel of the site.

This project is generated with [Vite](https://vitejs.dev/).

## Folder structure

```
scripts
  └─ scripts that runs in NodeJS environment
src
  ├─ components
  |   ├─ react components that renders HTML elements
  |   └─ does NOT make network requests
  ├─ containers
  |   ├─ react components that renders components
  |   └─ makes network requests
  └─ pages
      ├─ react components that renders a page
      └─ can make network requests
```

## Getting Started

Prerequisites:

1. NodeJS v18
1. pnpm

To work on the project:

```
cd apps/web
```

To run the project:

```
pnpm dev
```

To build the project:

```
pnpm build
```
