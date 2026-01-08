---
title: Label
---

`Label[tag]` represents a point in a compound expression to which control can be transferred using `Goto`.

## Examples

```wolfram
Module[{i = 0}, Label[start]; i++; If[i < 5, Goto[start]]; i]
```

```wolfram
Label["myLabel"]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Label.html) for more details.