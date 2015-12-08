# Amazon Web Services configuration for Actor Server

Open-Source Actor Server edition uses Amazon S3 as a file storage. Other storage adapters like local files storage or various cloud providers are supported in [enterprise edition](https://actor.im/platform/enterprise).

#### Bucket creation

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
