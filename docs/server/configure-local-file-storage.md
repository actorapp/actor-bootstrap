# Actor local file storage configuration

Local file storage is enabled by default in Actor Server Open-Source edition. You just need to fill in file storage location in your server.conf.

```
services {
  file-storage {
    # provide your own path to directory with read and write permissions for user `actor`
    location: "/home/username/actor/files"
  }
}
```
