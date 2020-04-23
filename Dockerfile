FROM node:12-alpine

ENV PORT=8080 \
    APP_DIR=/usr/app

EXPOSE 8080

LABEL io.openshift.expose-service="8080:http"

WORKDIR ${APP_DIR}/src

COPY . .

RUN chgrp -R 0 ${APP_DIR} && \
    chmod -R g=u ${APP_DIR} && \
    apk update && apk upgrade && \
    apk add build-base && apk add libc6-compat && \
    npm config set unsafe-perm true && \
    echo "n" | npm install -g @angular/cli@9.x.x && \
    ng analytics off && \
    npm install && \
    npm --prefix ./server install && \
    ng build --prod --build-optimizer --source-map=false && \
    mv server ${APP_DIR} && \
    rm -rf ${APP_DIR}/src

WORKDIR ${APP_DIR}/server

CMD node server.js