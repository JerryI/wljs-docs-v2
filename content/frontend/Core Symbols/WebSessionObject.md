# WebSessionObject

`WebSessionObject[...]` represents a web browser session started by `StartWebSession` for use with `WebExecute`.

## Examples

Start a web session:

```wolfram
session = StartWebSession[]
```

Navigate to a URL:

```wolfram
WebExecute[session, "OpenPage" -> "https://www.wolfram.com"]
```

Close the session:

```wolfram
DeleteObject[session]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/WebSessionObject.html) for more details.*