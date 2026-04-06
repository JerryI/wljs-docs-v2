---
title: RawMemoryImport
---

`RawMemoryImport[ptr, format]` imports raw memory from the pointer ptr with the specified format.

- `RawMemoryImport[format]` represents an operator form of `RawMemoryImport` that can be applied to an expression.

## Examples

```wolfram
ptr = RawMemoryAllocate["UnsignedInteger8", 10];
RawMemoryImport[ptr, "UnsignedInteger8"]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RawMemoryImport.html) for more details.