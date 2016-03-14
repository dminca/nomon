# nomon
Simple NodeJS with MongoDB

## Dependencies
* [docker-alpine-mongo][1]
* [mhart/alpine-node][2]
* [NodeJS & MongoDB tutorial to follow along][3]

## Application flow
> The `nomon` app is built on Docker Alpine and uses the following
architecture:
* runns on Node JS
* MongoDB as storage
*`express` + `express-generator`
* main storage folder is `/data` in cwd

After running the `mongodb` container, run `$ mongod --dbpath $PWD/data`
so that Mongo uses it as storage.

The `/data` folder must be mounted in the Docker VOLUME.

[1]: https://github.com/mvertes/docker-alpine-mongo
[2]: https://hub.docker.com/r/mhart/alpine-node/
[3]: http://www.newthinktank.com/2016/01/nodejs-mongodb-tutorial/