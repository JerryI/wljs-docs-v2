# InstallService

`InstallService["url"]` installs the web service operations in the WSDL description at the URL given.

- `InstallService["url", "context`"]` installs web service operations, creating functions in the specified context.

## Examples

Install a web service:

```wolfram
InstallService["http://example.com/service?wsdl"]
```

Install to a specific context:

```wolfram
InstallService["http://example.com/service?wsdl", "MyService`"]
```

List installed operations:

```wolfram
service = InstallService["http://example.com/service?wsdl"];
Names["MyService`*"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/InstallService.html) for more details.*