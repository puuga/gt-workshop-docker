# Cheat Sheet

## sh

ssh `ssh <user>@<host>`

ssh with specific key `ssh -i <key> <user>@<host>`

create file `touch <filename>`

change directory to `cd <to>`

change directory to home `cd ~`

`.` means current directory

`..` means parent directory

## git

clone remote repo to local `git clone <repo>`

clone remote repo to specific folder on local `git clone <repo> <directory>`

check status `git status`

List all the branches in your repo, and also tell you what branch you're currently in `git branch`

Fetch and merge changes on the remote server to your working directory `git pull`

## docker

### build

Build an image from the Dockerfile in the current directory and tag the image `docker build -t <repo>:<version> .`

List all images that are locally stored with the Docker engine `docker images`

Delete an image from the local image store `docker rmi <repo>:<version>`

### Ship

Pull an image from a registry `docker pull <repo>:<version>`

Retag a local image with a new image name and tag `docker tag <source repo>:<source version> <target repo>:<target version>`

Log in to a registry (the Docker Hub by default) `docker login`

Push an image to a registry `docker push <repo>:<version>`

### run

`docker run [option?] <repo>:<version> [command?]`

option

`--rm` remove container automatically after it exits

`it` connect the container to terminal

`--name <name>` name the container

`-p <host port>:<constainer port>` expose host port and map to constainer port

`-v <host volume>:<constainer volume>` create a host mapped volume inside the container

command

`[command?]` the command to run inside the container

Stop a running container through SIGTERM `docker stop <containner name or id>`

Stop a running container through SIGKILL `docker kill <containner name or id>`

Remove a container `docker rm <containner name or id>`

Create an overlay network and specify a subnet `docker network create --subnet 10.1.0.0/24 --gateway 10.1.0.1 -d overlay mynet`

List the networks `docker network ls`

List the running containers `docker ps`

Delete all running and stopped containers `docker rm -f $(docker ps -aq)`

Create a new bash process inside the container and connect it to the terminal `docker exec -it web bash`

Print the last 100 lines of a container’s logs `docker logs --tail 100 <containner name or id>`