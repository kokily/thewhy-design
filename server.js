const Koa = require('koa');
const Router = require('@koa/router');
const next = require('next');
const https = require('https');
const http = require('http');
const fs = require('fs');
const { default: enforceHTTPS } = require('koa-sslify');
const serve = require('koa-static');

const dev = process.env.NODE_ENV !== 'production';
const devApp = next({ dev });
const handler = devApp.getRequestHandler();

devApp.prepare().then(() => {
  const app = new Koa();
  const router = new Router();
  const configurations = {
    production: { ssl: true, port: 443, hostname: 'thewhy.kr' },
    development: { ssl: false, port: 3000, hostname: 'localhost' },
  };
  const environment = process.env.NODE_ENV || 'production';
  const config = configurations[environment];

  router.all('(.*)', async (ctx) => {
    await handler(ctx.req, ctx.res);
    ctx.respond = false;
  });

  router.use(async (ctx, next) => {
    ctx.res.statusCode = 200;
    await next();
  });

  app.use(serve('./public'));
  app.use(enforceHTTPS({ port: 443 }));
  app.use(router.routes());

  let httpServer;
  let httpsServer;

  if (config.ssl) {
    httpServer = http.createServer(app.callback());
    httpsServer = https.createServer(
      {
        key: fs.readFileSync(`${process.env.SSL_KEY}`),
        cert: fs.readFileSync(`${process.env.SSL_CERT}`),
      },
      app.callback()
    );

    httpServer.listen(80);
    httpsServer.listen(config.port, () => {
      console.log(`> Ready on https://${config.hostname}:${config.port}`);
    });
  } else {
    httpServer = http.createServer(app.callback());

    httpServer.listen(config.port, () => {
      console.log(`> Ready on dev server ${config.port} port`);
    });
  }
});
