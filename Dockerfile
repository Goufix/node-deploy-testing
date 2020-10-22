FROM keymetrics/pm2:12-alpine

WORKDIR /app

COPY . .

RUN pm2 install typescript
RUN cp pm2.json dist/pm2.json
RUN cp packgage.json dist/packgage.json

ENTRYPOINT exec pm2-runtime start pm2.json
