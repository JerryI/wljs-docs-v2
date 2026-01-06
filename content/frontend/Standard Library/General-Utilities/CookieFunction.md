---
title: CookieFunction
---

`CookieFunction` is an option for `URLRead`, `HTTPRequest`, and related functions that gives a function to apply to each cookie received when an HTTP response is received.

## Examples

Process cookies with a custom function:

```wolfram
URLRead["http://example.com", CookieFunction -> Print]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CookieFunction.html) for more details.*