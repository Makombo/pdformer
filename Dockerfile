FROM node:4.4.7-wheezy

# Bundle app source
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
VOLUME ["/usr/src/app"]


# Install naitive dependencies
RUN apt-get update -y \ 
  && apt-get install -y python-software-properties \ 
  && add-apt-repository "deb http://http.debian.net/debian wheezy-backports main" \  
  && apt-get update -y \ 
  && apt-get install -y libcairo2-dev \ 
  && apt-get -t wheezy-backports install -y libpoppler-qt4-dev \ 
  && apt-get install -y build-essential \ 
  && rm -rf /var/lib/apt/lists/* 


EXPOSE 3000
ENTRYPOINT [ "npm" ]
CMD [ "start" ]
