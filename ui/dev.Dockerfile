FROM node:16.10-alpine3.11
WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn
VOLUME [ "/app/node_modules" ]

RUN echo "#!/bin/sh" >> /entry_point.sh
RUN echo "yarn dev --host" >> /entry_point.sh
RUN chmod +x /entry_point.sh

CMD ["/entry_point.sh"]
