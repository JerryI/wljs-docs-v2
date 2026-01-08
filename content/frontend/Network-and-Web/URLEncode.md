---
title: URLEncode
---

`URLEncode["string"]` converts "string" into a URL-style, percent-encoded ASCII string.

## Examples

Encode a string with spaces:

```wolfram
URLEncode["Hello World"]
(* "Hello%20World" *)
```

Encode special characters:

```wolfram
URLEncode["test=value&key=123"]
(* "test%3Dvalue%26key%3D123" *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/URLEncode.html) for more details.