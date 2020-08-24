# Blogging application

Demo project to showcase setting up a blogging application using nodejs and react using microservices to implement the CQRS pattern.

## APIs

### Posts api
The posts api, available in the `posts` directory, as the name suggests is used to add and retrieve blog posts. 

### Comments api
The comments api, available in the `comments` directory is used to add and retrieve comments associated with a post. 

### Query Service api
The query service api, available in the `query` directory is used to retrieve blog posts and comments associated with the blog posts in a single call. This service provides the Query part of the CQRS implementation and is aligned to support the front end application by providing all the required data in a single call 

### Moderation api
The moderation service api, available in the `moderation` directory is used to moderate blog post comments. This service is notified by the event bus of new comments posted and either approves or rejects the comment. The moderated comment is published back to the event bus which pushes the updated comment to the query service. 

### Event-Bus api
The event bus is a simple implementation of a bus using an api, available in the `event-bus` directory and is used to forward the posts and comments to the query service. 

## Web application

The `client` project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the `client` project directory, you can run:

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


## Deployment - Kubernetes

Readme - /infra/k8s/README.md

### Dev Environment

#### Skaffold

https://skaffold.dev/docs/install/

```Shell Script
brew install skaffold
```

Start the cluster
```
skaffold dev
```

Stop and cleanup
```
CTRL+C
```

#### hosts file
Add an entry of posts.com (or whichever domain we wish to use - update the ingress-svc.yaml as well) pointing to 127.0.0.1 in /etc/hosts

#### Accessing the application in dev env
http://posts.com

### Prod Environment

Apply all deployment files in infra/k8s
``` Shell Script
kubectl -f apply client-deployment.yaml
kubectl -f apply posts-deployment.yaml
kubectl -f apply comments-deployment.yaml
kubectl -f apply query-deployment.yaml
kubectl -f apply moderation-deployment.yaml
kubectl -f apply event-bus-deployment.yaml
kubectl -f apply ingress-svc.yaml
```