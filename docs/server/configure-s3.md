# Amazon Web Services configuration for Actor Server

Actor Server Open-Source edition uses local file storage by default, and also provides Amazon S3 file adapter. Other cloud providers are supported in [enterprise edition](https://actor.im/business).

### Amazon S3 configuration

#### Step 1: Create bucket

Create a bucket with CORS enabled with the following configuration:

```
<?xml version="1.0" encoding="UTF-8"?>
<CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
    <CORSRule>
        <AllowedOrigin>*</AllowedOrigin>
        <AllowedMethod>GET</AllowedMethod>
        <AllowedMethod>PUT</AllowedMethod>
        <MaxAgeSeconds>3000</MaxAgeSeconds>
        <AllowedHeader>*</AllowedHeader>
    </CORSRule>
</CORSConfiguration>
```

### Step 2: Fill in config section in your server.conf

```
modules {
  files {
    adapter: "im.actor.server.file.s3.S3StorageAdapter"
  }
}
services {
  aws {
    s3 {
      default-bucket: "<bucket name>"
      access-key: "<your aws access key>"
      secret-key: "<your aws secret key>"
    }
  }
```
