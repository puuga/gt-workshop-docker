# gt-workshop-docker

## Materials

* Docker Conntainer <https://docs.google.com/presentation/d/1w4WwIpuFExtFFeLAwU99gxKBkVZocex2Syct7YB1KV0/edit?usp=sharing>

* Cloud Native <https://docs.google.com/presentation/d/1AUljWBjHaryWNrBjqznILTOFUHl-uAqPwbojYuZ2lGo/edit?usp=sharing>

## Server preparation

### SSH

1. Open an SSH client. (find out how to connect using PuTTY)

2. Locate your private key file (gt-workshop-docker.pem). The wizard automatically detects the key you used to launch the instance.

3. Your key must not be publicly viewable for SSH to work. Use this command if needed

    `chmod 400 gt-workshop-docker.pem`

4. Connect to your instance using its Public DNS

    `ec2-3-1-50-146.ap-southeast-1.compute.amazonaws.com`

    `ssh -i "gt-workshop-docker.pem" ubuntu@ec2-3-1-50-146.ap-southeast-1.compute.amazonaws.com`

### Node.js Ubuntu

```sh
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs
```

verify with `node -v`

### Docker Ubuntu

#### Set up the repo and install docker-ce

First, update your existing list of packages:

`$ sudo apt update`

Next, install a few prerequisite packages which let apt use packages over HTTPS:

`$ sudo apt install apt-transport-https ca-certificates curl software-properties-common`

Then add the GPG key for the official Docker repository to your system:

`$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -`

Add the Docker repository to APT sources:

`$ sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"`

Next, update the package database with the Docker packages from the newly added repo:

`$ sudo apt update`

Make sure you are about to install from the Docker repo instead of the default Ubuntu repo:

`$ apt-cache policy docker-ce`

You'll see output like this, although the version number for Docker may be different:

```sh
docker-ce:
  Installed: (none)
  Candidate: 18.03.1~ce~3-0~ubuntu
  Version table:
     18.03.1~ce~3-0~ubuntu 500
        500 https://download.docker.com/linux/ubuntu bionic/stable amd64 Packages
```

Notice that docker-ce is not installed, but the candidate for installation is from the Docker repository for Ubuntu 18.04 (bionic).

Finally, install Docker:

`$ sudo apt install docker-ce`

Docker should now be installed, the daemon started, and the process enabled to start on boot. Check that it's running:

`sudo systemctl status docker`

The output should be similar to the following, showing that the service is active and running:

```sh
● docker.service - Docker Application Container Engine
   Loaded: loaded (/lib/systemd/system/docker.service; enabled; vendor preset: enabled)
   Active: active (running) since Thu 2018-07-05 15:08:39 UTC; 2min 55s ago
     Docs: https://docs.docker.com
 Main PID: 10096 (dockerd)
    Tasks: 16
   CGroup: /system.slice/docker.service
           ├─10096 /usr/bin/dockerd -H fd://
           └─10113 docker-containerd --config /var/run/docker/containerd/containerd.toml
```

#### Executing the Docker Command Without Sudo (Optional)

By default, the docker command can only be run the root user or by a user in the docker group, which is automatically created during Docker's installation process. If you attempt to run the docker command without prefixing it with sudo or without being in the docker group, you'll get an output like this:

```sh
docker: Cannot connect to the Docker daemon. Is the docker daemon running on this host?.
See 'docker run --help'.

or

Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Get http://%2Fvar%2Frun%2Fdocker.sock/v1.39/containers/json: dial unix /var/run/docker.sock: connect: permission denied
```

If you want to avoid typing sudo whenever you run the docker command, add your username to the docker group:

`$ sudo usermod -aG docker ${USER}`

## Workshop preparation (Attendees)

### Docker Account

<https://hub.docker.com/>

### GitHub Account (Optional)

<https://github.com/>

### Clone workshop repo to local

`git clone https://github.com/puuga/gt-workshop-docker.git`

Logic goes here ...

## May the force be with you ;-)