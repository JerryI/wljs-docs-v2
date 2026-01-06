---
title: RawPointer
---

`RawPointer[addr, type]` represents a raw pointer to the specified *type* at the memory address *addr*.

## Examples

```wolfram
ptr = RawMemoryAllocate["Integer32", 4];
RawPointer[ptr, "Integer32"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RawPointer.html) for more details.*