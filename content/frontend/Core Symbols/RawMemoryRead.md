# RawMemoryRead

`RawMemoryRead[ptr]` reads raw memory from the pointer ptr.

`RawMemoryRead[ptr, offset]` reads from an offset pointer.

## Examples

```wolfram
ptr = RawMemoryAllocate["Integer32", 10];
RawMemoryRead[ptr]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RawMemoryRead.html) for more details.*