---
title: RawMemoryWrite
---

`RawMemoryWrite[ptr, val]` writes a binary representation of val to the raw memory at the pointer ptr.

`RawMemoryWrite[ptr, val, offset]` writes to an offset pointer.

## Examples

```wolfram
ptr = RawMemoryAllocate["Integer32", 10];
RawMemoryWrite[ptr, 42]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RawMemoryWrite.html) for more details.