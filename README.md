# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/server`
- `build/client`

### MEMO

- コンテナの中で何か行いたい場合（コンテナ内の Shell）
  docker run -it --mount type=bind,src=$(pwd),dst=/app remix-app-1_remix:latest /bin/sh

- 抜けたい場合
  exit
