# ServiceConnect

`ServiceConnect["service"]` creates a connection to an external service.

- `ServiceConnect["service", id]` uses the specified connection identifier.

## Examples

Connect to Twitter:

```wolfram
twitter = ServiceConnect["Twitter"]
```

Connect to YouTube:

```wolfram
youtube = ServiceConnect["YouTube"]
```

With identifier:

```wolfram
ServiceConnect["Dropbox", "myconnection"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ServiceConnect.html) for more details.*