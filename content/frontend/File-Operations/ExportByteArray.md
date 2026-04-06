---
title: ExportByteArray
---

`ExportByteArray[expr, "format"]` generates a `ByteArray` object corresponding to expr exported in the specified format.

`ExportByteArray[exprs, elems]` generates a `ByteArray` object by treating exprs as elements specified by elems.

## Examples

Export an image to byte array:

```wolfram
ExportByteArray[Graphics[Circle[]], "PNG"]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ExportByteArray.html) for more details.