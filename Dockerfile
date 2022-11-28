FROM node:18
RUN mkdir -p /code
WORKDIR /code
ADD . /code
RUN yarn && yarn run build
COPY . /app 
CMD yarn run start 
EXPOSE 5000