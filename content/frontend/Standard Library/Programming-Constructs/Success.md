---
title: Success
---

`Success["tag", assoc]` represents a success of a type indicated by tag, with details given by the association assoc.

## Examples

Create a success object:
```wolfram
Success["Operation", <|"Result" -> 42|>]
```

Check success type:
```wolfram
result = Success["Download", <|"File" -> "data.txt"|>];
result["Tag"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Success.html) for more details.*