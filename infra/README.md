

### Deployment

#### Restarting a deployment

```Shell Script
kubectl rollout restart deployment [deployment name]
```

#### Enable ingress controller 
https://kubernetes.github.io/ingress-nginx/deploy/#docker-for-mac
```Shell Script
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.34.1/deploy/static/provider/cloud/deploy.yaml
```

#### hosts file
Add an entry of posts.com (or whichever domain we wish to use - update the ingress-svc.yaml as well) pointing to 127.0.0.1 in /etc/hosts
