FROM node:10
WORKDIR /hellodocker
COPY package.json /hellodocker
RUN npm install
COPY . /hellodocker
CMD npm start
EXPOSE 3000