# BinaryFormat

`BinaryFormat` is an option for OpenRead and related functions that specifies that a stream should be opened in binary format, so that no textual interpretation of newlines or other data is done.

## Examples

Open file in binary format:

```wolfram
stream = OpenRead["file.bin", BinaryFormat -> True]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BinaryFormat.html) for more details.*