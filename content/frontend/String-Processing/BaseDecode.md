---
title: BaseDecode
---

`BaseDecode["string"]` decodes the Base64 data contained in a string and returns the result as a byte array.

`BaseDecode["string", "encoding"]` decodes using the string using the specified encoding.

## Examples

Decode Base64:

```wolfram
BaseDecode["SGVsbG8="]
(* ByteArray[{72, 101, 108, 108, 111}] *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BaseDecode.html) for more details.