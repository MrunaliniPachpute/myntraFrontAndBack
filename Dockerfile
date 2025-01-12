FROM ubuntu

RUN apt-get update
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get upgrade -y
RUN apt-get install -y nodejs

WORKDIR /app

COPY 2-actual-backend/package.json /app/package.json
COPY 2-actual-backend/package-lock.json /app/package-lock.json

RUN npm install 

COPY . .  
# to take all files and folders



ENTRYPOINT [ "node", "2-actual-backend/app.js" ]