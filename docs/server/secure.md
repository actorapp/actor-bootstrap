Securing Actor Server
===

For secure communications Actor Server have to be configured with Curve25519 keys. To generate them, use `actor-cli` util:

```
actor-cli -c -o ~/actor-key
```

After generating it will instruct you what have to be added to server.conf
