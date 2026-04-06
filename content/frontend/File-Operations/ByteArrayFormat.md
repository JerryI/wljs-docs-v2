---
title: ByteArrayFormat
---

`ByteArrayFormat[ba]` attempts to determine what ImportByteArray format could be used to import the ByteArray object ba.

## Examples

Detect format of byte array:

```wolfram
ba = ExportByteArray[Plot[Sin[x], {x, 0, 2 Pi}], "PNG"];
ByteArrayFormat[ba]
(* "PNG" *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ByteArrayFormat.html) for more details.