

### Deployment

#### Docker image tags
Build the image for posts/comments/query/moderation/event-bus/client using the tag: latest

### Use the tag :latest or no tag in the k8s deployment.yaml file for resources

Add the tag :latest or no tag in the k8s deployment.yaml file for resources in the spec > containers > image

```
   spec:
      containers:
      - name: event-bus
        image: sandeepchugh/event-bus
```

### Push to Docker Hub
Push the image to docker hub as kubernetes needs the image in docker hub if no tag has been specified in the deployment config


#### Restart the deployment

Restart the deployment so the new image can be pulled from docker hub

```Shell Script
kubectl rollout restart deployment [deployment name]
```

### Additional Configuration 

#### Enable ingress controller 
https://kubernetes.github.io/ingress-nginx/deploy/#docker-for-mac
```Shell Script
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.34.1/deploy/static/provider/cloud/deploy.yaml
```

#### hosts file
Add an entry of posts.com (or whichever domain we wish to use - update the ingress-svc.yaml as well) pointing to 127.0.0.1 in /etc/hosts
