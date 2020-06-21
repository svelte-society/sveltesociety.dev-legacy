FROM node:lts-alpine
RUN apk add --no-cache git
WORKDIR /app
RUN npm init -y && npm install spassr@1.0.2
COPY ./dist ./dist
EXPOSE 5000 5005
ENTRYPOINT ["npx", "spassr", "--serve-spa", "--serve-ssr"]
