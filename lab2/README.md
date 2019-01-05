# gt-workshop-docker

## Lab 2

### Section 1: Build

1. Create the docker file with `touch Dockerfile` or `nano Dockerfile`

2. Add some content to Dockerfile by `nano Dockerfile`

    ```Dockerfile
    FROM alpine:latest

    CMD ["echo", "\"Hello World\""]
    ```

    *nano command*

    `ctrl + o` to save

    `ctrl + x` to exit

3. Build the image with `docker build -t my-hello-world .`

4. Try run a container from the image `docker run my-hello-world`, Logic goes here ;-)

### Section 2: Ship

1. Login to Docker Hub `docker login`

    `docker login [OPTIONS] [SERVER]`

    `-p, --password`

    `-u, --username`

2. Re tag the image with `docker tag my-hello-world:latest <docker username>/my-hello-world:latest`

    Ex, my docker username id puuga `docker tag my-hello-world:latest puuga/my-hello-world:latest`

3. Push the image to repo `docker push <docker username>/<image>`

    Ex, my docker username id puuga `docker push puuga/my-hello-world:latest`

    Then verify the image should list on <https://hub.docker.com/u/[your_username]>

### Section 3: Deploy

1. Remove images `my-hello-world:latest` and `<docker username>/my-hello-world:latest`, then make sure they are removed

    `docker rmi my-hello-world:latest` and `docker rmi <docker username>/my-hello-world:latest`

2. Run `docker pull <docker username>/my-hello-world:latest` to pull the image from registry

    Ex, my docker username id puuga `docker pull puuga/my-hello-world:latest`

3. Run a container with the image `docker run <docker username>/my-hello-world:latest`

    Ex, my docker username id puuga `docker run puuga/my-hello-world:latest`

Good job ;-)