FROM heroku/heroku:20-build.v66
LABEL maintainer="Sam Weddington"
WORKDIR /app
COPY . /app
RUN npm install
RUN npm start
EXPOSE 8086
EXPOSE $PORT
CMD [""]
