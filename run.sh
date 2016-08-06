mywd=( $(cat ./Dockerfile | grep VOLUME | awk -F'[ ,\\[\\]]' '/VOLUME/{for(i=3;i<=NF;i+=2) print $i}') )
docker stop ${PWD##*/}
docker rm -f ${PWD##*/}
docker build -t somombo/${PWD##*/} .
docker run -d -P --name ${PWD##*/} -v $(pwd):$(echo ${mywd[0]} | tr -d \" | tr -d \') somombo/${PWD##*/}
docker exec -it ${PWD##*/} /bin/bash




