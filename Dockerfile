# Stage1 Node Build
FROM node:16 as builder

LABEL maintainer = "baekjaein <baek2506@gmail.com>"

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

# Stage2 Nginx Serve
FROM nginx:alpine

COPY --from=builder /app/build /usr/share/nginx/html 

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]