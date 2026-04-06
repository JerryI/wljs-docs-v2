---
title: URLDecode
---

`URLDecode["string"]` decodes a URL-style percent-encoded string.

## Examples

Decode a URL-encoded string:

```wolfram
URLDecode["Hello%20World"]
(* "Hello World" *)
```

Decode special characters:

```wolfram
URLDecode["test%3Dvalue%26key%3D123"]
(* "test=value&key=123" *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/URLDecode.html) for more details.