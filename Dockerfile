FROM node:18-alpine
RUN mkdir -p /code
WORKDIR /code
ADD . /code
RUN yarn && yarn run build
COPY . /app 
CMD yarn run start 
EXPOSE 5000
