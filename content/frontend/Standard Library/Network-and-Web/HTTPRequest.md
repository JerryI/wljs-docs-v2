---
title: HTTPRequest
---

`HTTPRequest[url]` represents an HTTP request for the specified URL.

- `HTTPRequest[assoc]` represents an HTTP request built from the components in the association `assoc`.
- `HTTPRequest[url, assoc]` represents an HTTP request for the specified URL with additional elements such as headers given by `assoc`.

## Examples

```wolfram
HTTPRequest["https://example.com"]
```

```wolfram
HTTPRequest["https://api.example.com", <|"Method" -> "POST", "Body" -> "data"|>]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/HTTPRequest.html) for more details.*