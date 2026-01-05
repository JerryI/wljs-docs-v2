# ServiceRequest

`ServiceRequest[service,"req"]` represents a service request built from service, which might be a connected ServiceObject or a valid service name, and request "req".

`ServiceRequest[service,"req",param]` represents a service request, built from the service service, request "req" and parameters param.

`ServiceRequest[assoc]` represents a service request, built from association assoc.

## Examples

Create a service request:

```wolfram
ServiceRequest["Twitter", "Search", {"Query" -> "wolfram"}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ServiceRequest.html) for more details.*