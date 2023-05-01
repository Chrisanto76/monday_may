FROM node:18-alpine3.15

WORKDIR /usr/src/app/monday_may

# RUN installe nginx
# COPY nginx.conf /chemin vers nginx.conf
# RUN lance nginx avec daemon

COPY package*.json ./

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]