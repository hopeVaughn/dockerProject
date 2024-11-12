FROM node:20 AS build
ARG VITE_BACKEND_URL=https://blog-backend-886172233725.us-west1.run.app/api/v1
ENV VITE_BACKEND_URL=${VITE_BACKEND_URL}
WORKDIR /build
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx AS final
WORKDIR /usr/share/nginx/html
COPY --from=build /build/dist .
COPY --from=build /build/dist .
