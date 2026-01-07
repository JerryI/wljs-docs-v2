---
title: NetDecoder
---

`NetDecoder["name"]` represents a decoder that takes a net representation and decodes it into an expression of a given form.

- `NetDecoder[{"name", ...}]` represents a decoder with additional parameters specified.

## Examples

```wolfram
NetDecoder["Class", {"cat", "dog", "bird"}]
```

```wolfram
NetDecoder[{"Image", {224, 224}}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NetDecoder.html) for more details.*