# gt-workshop-docker

## Lab 3

### Section 1: Run Node application

1. Go to lab3/src then

    Install node dependencies with `npm install`

    Try to run node app with `npm start` will see

    ```sh
    Example app listening on port 3000!
    ```

    Now, your app will serve 'Hello World! - GT Docker workshop' when you hit ...:3000

    *Note*
    `ctrl+c` to exit node app

### Section 2: build Node application as a Docker image

1. Explore Dockerfile by `cat Dockerfile`

2. Build an image with `docker build -t <docker username>/lab3:latest .`

    Ex, my docker username id puuga `docker build -t puuga/lab3:latest .`

3. Try run a container from the image `docker run <docker username>/lab3:latest`,

    Ex, my docker username id puuga `docker run puuga/lab3:latest`

    But, You can not access ...:3000 because port 3000 is listen on conntainer, not host. You have to put `-p` to mapping host port and container port

    `docker run -p 3000:3000 <docker username>/lab3:latest`

    Ex, my docker username id puuga `docker run -p 3000:3000 puuga/lab3:latest`

    Magic goes here ;-)

### Section 3: Make app moveable, scaleable with container

1. Try to run a container with differance environment `docker run -p 3000:3000 -e APP_DB_HOST="aws host" <docker username>/lab3:latest`

    Ex, my docker username id puuga `docker run -p 3000:3000 -e APP_DB_HOST="aws host" puuga/lab3:latest`

    Logic goes here ;-)