---
title: WriteString
---

`WriteString["file", "string"]` writes a string to a file.

`WriteString[channel, expr1, expr2, ...]` writes multiple expressions in sequence.

## Examples

Write to a file:

```wolfram
WriteString["output.txt", "Hello, World!"]
```

Write to standard output:

```wolfram
WriteString[$Output, "Message: ", value, "\n"]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/WriteString.html) for more details.