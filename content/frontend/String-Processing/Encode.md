---
title: Encode
---

`Encode["source", "dest"]` writes an encoded version of the file source to the file dest.

`Encode["source", "dest", "key"]` produces an encoded file that must be read using `Get["dest", "key"]`.

## Examples

Encode a source file:

```wolfram
Encode["mycode.m", "mycode.mx"]
```

Encode with password:

```wolfram
Encode["secret.m", "secret.mx", "mypassword"]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Encode.html) for more details.