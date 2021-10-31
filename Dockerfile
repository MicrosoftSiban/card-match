FROM heroku/heroku:20-build.v66
LABEL maintainer="Sam Weddington"
WORKDIR /app
RUN sudo su -c "apt-get update" >> output.log
COPY . /app
#RUN npm install
#EXPOSE 3000
EXPOSE $PORT
#CMD ["npm", "start"]
CMD [""]
