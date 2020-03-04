FROM mongo:3.4.18-jessie

RUN apt-get update -y && apt-get install -y netcat && apt-get clean
COPY userPosSeed.json /userPosSeed.json
COPY ./init.sh /init.sh
ADD https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh /wait-for-it.sh
RUN chmod +x /init.sh /wait-for-it.sh
VOLUME ["/data/db"]

CMD /init.sh 

EXPOSE 27017