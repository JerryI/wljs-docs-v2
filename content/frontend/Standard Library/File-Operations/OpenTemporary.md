# OpenTemporary

`OpenTemporary[]` opens a temporary file to which output can be written, and returns an OutputStream object.

## Examples

```wolfram
stream = OpenTemporary[];
Write[stream, "test data"];
Close[stream]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/OpenTemporary.html) for more details.*