FROM heroku/heroku:20-build.v66
LABEL maintainer="Sam Weddington"
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 8086
EXPOSE $PORT
CMD ["npm", "start"]
