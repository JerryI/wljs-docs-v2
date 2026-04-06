---
title: RawMemoryExport
---

`RawMemoryExport[expr]` exports a raw memory representation of expr.

- `RawMemoryExport[expr, type]` uses the specified element type when returning an array.

## Examples

```wolfram
RawMemoryExport[{1, 2, 3, 4}]
```

```wolfram
RawMemoryExport[Image[RandomReal[1, {10, 10}]], "Real32"]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RawMemoryExport.html) for more details.