---
title: AbortProtect
---

`AbortProtect[expr]` evaluates expr, saving any aborts until the evaluation is complete.

## Example

Protect critical cleanup code from being aborted:

```wolfram
AbortProtect[
  stream = OpenWrite["file.txt"];
  WriteString[stream, "data"];
  Close[stream]
]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AbortProtect.html) for more details.*