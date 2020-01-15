FROM node:lts-alpine AS builder

WORKDIR /usr/src/app

COPY . .

RUN npm i && npm run build --prod

FROM nginx:alpine

COPY --from=builder /usr/src/app/dist/ /usr/share/nginx/html