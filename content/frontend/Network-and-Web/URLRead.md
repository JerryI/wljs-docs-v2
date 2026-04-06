---
title: URLRead
---

`URLRead[url]` sends a request to a URL and reads back the response, returning it as a response object.

`URLRead[assoc]` sends a request to a URL built from an association of components and metadata elements.

`URLRead[HTTPRequest[...]]` sends a request specified by a symbolic HTTPRequest object.

`URLRead[req, "elem"]` returns only the element elem from the response.

## Examples

Read from a URL:

```wolfram
URLRead["https://httpbin.org/get"]
(* HTTPResponse[...] *)
```

Get specific element:

```wolfram
URLRead["https://example.com", "Body"]
(* "<!doctype html>..." *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/URLRead.html) for more details.