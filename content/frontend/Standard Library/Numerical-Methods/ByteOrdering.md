# ByteOrdering

`ByteOrdering` is an option for BinaryRead, BinaryWrite, and related functions that specifies what ordering of bytes should be assumed for your computer system.

## Examples

Check system byte ordering:

```wolfram
$ByteOrdering
(* -1 for little-endian, 1 for big-endian *)
```

Read with specific byte ordering:

```wolfram
BinaryRead[stream, "Integer32", ByteOrdering -> 1]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ByteOrdering.html) for more details.*