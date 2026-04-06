---
title: RawMemoryRead
---

`RawMemoryRead[ptr]` reads raw memory from the pointer ptr.

`RawMemoryRead[ptr, offset]` reads from an offset pointer.

## Examples

```wolfram
ptr = RawMemoryAllocate["Integer32", 10];
RawMemoryRead[ptr]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RawMemoryRead.html) for more details.