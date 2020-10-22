FROM keymetrics/pm2:12-alpine

WORKDIR /app

COPY . .

ENTRYPOINT exec pm2-runtime start pm2.json
