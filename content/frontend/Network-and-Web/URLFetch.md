---
title: URLFetch
---

`URLFetch[url]` returns the contents of a URL as a string.

`URLFetch[url, elements]` returns the specified elements from a URL.

## Examples

Fetch content from a URL:

```wolfram
URLFetch["https://httpbin.org/get"]
(* "{\"args\": {}, ...}" *)
```

Fetch specific elements:

```wolfram
URLFetch["https://example.com", "StatusCode"]
(* 200 *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/URLFetch.html) for more details.