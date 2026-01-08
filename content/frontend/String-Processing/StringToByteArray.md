---
title: StringToByteArray
---

`StringToByteArray["string"]` returns a byte array corresponding to the UTF-8 encoding of the specified string.

- `StringToByteArray["string", "encoding"]` uses the specified character encoding.

## Examples

UTF-8 encoding:

```wolfram
StringToByteArray["Hello"]
```

With different encoding:

```wolfram
StringToByteArray["Hello", "ASCII"]
```

Unicode characters:

```wolfram
StringToByteArray["你好"]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StringToByteArray.html) for more details.