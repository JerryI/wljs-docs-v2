# ImportByteArray

`ImportByteArray[ba, "format"]` imports data in the specified format from a ByteArray object.

- `ImportByteArray[ba, elements]` imports the specified elements.
- `ImportByteArray[ba]` attempts to determine the format automatically.

## Examples

```wolfram
ImportByteArray[ByteArray[{72, 101, 108, 108, 111}], "Text"]
```

```wolfram
ImportByteArray[ExportByteArray[{1, 2, 3}, "JSON"], "JSON"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImportByteArray.html) for more details.*