FROM ubuntu:latest

RUN apt-get update
RUN apt-get -y install nodejs
RUN apt-get -y install npm

#COPY . /src
COPY bin /src
COPY public /src
COPY routes /src
COPY views /src
COPY app.js /src/
COPY package.json /src/

RUN cd /src; npm install

EXPOSE 3000
CMD ["nodejs", "/src/bin/www"]