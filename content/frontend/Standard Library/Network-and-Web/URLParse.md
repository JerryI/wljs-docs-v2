---
title: URLParse
---

`URLParse["url"]` takes a well-formed URL and gives an association whose values correspond to the components of the URL.

- `URLParse["url", "component"]` returns only the specified component.
- `URLParse["url", {component1, component2, ...}]` returns only the specified component list.

## Examples

```wolfram
URLParse["https://example.com:8080/path?query=1#fragment"]
```

```wolfram
URLParse["https://user:pass@host.com/page", "Host"]
```

```wolfram
URLParse["https://example.com/path", {"Scheme", "Path"}]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/URLParse.html) for more details.*