FROM node:4.4.7-wheezy

# Bundle app source
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
VOLUME ["/usr/src/app"]


# Install naitive dependencies
RUN apt-get update && apt-get upgrade -y  && apt-get install -y python-software-properties \ 
  && add-apt-repository "deb http://http.debian.net/debian wheezy-backports main" \  
  && apt-get update && apt-get install -y libcairo2-dev \ 
  && rm -rf /var/lib/apt/lists/*

# Install node dependencies  
RUN npm install -g node-gyp
RUN npm install --save \ 
	express \ 
	pdf-fill-form


EXPOSE 3000
CMD [ "node", "index.js" ]