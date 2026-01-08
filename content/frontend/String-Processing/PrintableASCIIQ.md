---
title: PrintableASCIIQ
---

`PrintableASCIIQ[string]` yields `True` if the string contains only printable ASCII characters, and yields `False` otherwise.

Printable ASCII characters are those with codes 32-126 (space through tilde).

## Examples

```wolfram
PrintableASCIIQ["Hello, World!"]
```

```wolfram
PrintableASCIIQ["Hello\nWorld"]
```

```wolfram
PrintableASCIIQ["café"]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PrintableASCIIQ.html) for more details.