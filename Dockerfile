FROM node:12-alpine AS build

ENV PORT=8080 \
    APP_DIR=/usr/app

EXPOSE 8080

LABEL io.openshift.expose-service="8080:http"

RUN mkdir -p ${APP_DIR}/src

WORKDIR ${APP_DIR}/src

RUN echo "n" | npm install -g @angular/cli@9.x.x

COPY ["package.json", "package-lock.json", "./"]

RUN npm install

COPY server ./server

RUN npm --prefix ./server install

COPY src ./src
COPY ["tsconfig.json", "tsconfig.app.json","angular.json", "browserslist", "./"]

RUN ng analytics off && \    
    ng build --prod --build-optimizer --source-map=false && \
    mv server ${APP_DIR} && \
    rm -rf ${APP_DIR}/src && \
    chgrp -R 0 ${APP_DIR} && \
    chmod -R g=u ${APP_DIR}

FROM node:12-alpine

COPY --from=build /usr/app/server /usr/app/server

WORKDIR /usr/app/server

CMD node server.js