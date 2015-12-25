# Actor local file storage configuration

Local file storage is enabled by default in Actor Server Open-Source edition. Default location for files is `/var/lib/actor/files`. If you want to use different location - just fill in file storage location in your server.conf like this:

```
services {
  file-storage {
    # provide your own path to directory with read and write permissions for user `actor`
    location: "/home/username/actor/files"
  }
}
```
