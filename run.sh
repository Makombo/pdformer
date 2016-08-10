mywdarr=( $(cat ./Dockerfile | grep VOLUME | awk -F'[ ,\\[\\]]' '/VOLUME/{for(i=3;i<=NF;i+=2) print $i}') ); mywd=$(echo ${mywdarr[0]} | tr -d \" | tr -d \');

docker stop ${PWD##*/}
docker rm -f ${PWD##*/}
docker build -t somombo/${PWD##*/} .
docker run -d -P --name ${PWD##*/} -v $(pwd):$mywd somombo/${PWD##*/} 
# docker run -d -P --name ${PWD##*/} somombo/${PWD##*/}  
docker exec -it ${PWD##*/} /bin/bash




