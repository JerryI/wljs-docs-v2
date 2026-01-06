# HTTPRedirect

`HTTPRedirect[uri]` represents an HTTP redirect to the specified `uri`.

- `HTTPRedirect[uri, metadata]` represents an HTTP redirect to `uri` with the specified metadata.

## Examples

```wolfram
HTTPRedirect["https://example.com"]
```

```wolfram
HTTPRedirect["https://example.com", <|"StatusCode" -> 301|>]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/HTTPRedirect.html) for more details.*