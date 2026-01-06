# CompressionLevel

`CompressionLevel` is an option for `Export` and `CreateArchive` that specifies the amount of compression to use when compressing data.

## Examples

```wolfram
Export["data.gz", "Hello World", CompressionLevel -> 9]
```

```wolfram
CreateArchive["myfiles", "archive.zip", CompressionLevel -> 5]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CompressionLevel.html) for more details.*