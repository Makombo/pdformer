FROM node:latest


RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
# Bundle app source
COPY . /usr/src/app

VOLUME ["/usr/src/app"]



# Install app dependencies
RUN apt-get update && apt-get install -y \
    pdftk \
 && rm -rf /var/lib/apt/lists/*
RUN npm install --save express pdffiller


EXPOSE 3000
CMD [ "node", "index.js" ]