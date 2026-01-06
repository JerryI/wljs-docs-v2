---
title: NominalScale
---

`NominalScale[{cat1, cat2, ..., catn}]` represents a set of unordered categories cati.

- `NominalScale[<|cat1 -> lab1, ..., catn -> labn|>]` also associates the category cati with the labels labi.
- `NominalScale[..., <|cati -> labi, ...|>]` uses labi to represent cati in plots.
- `NominalScale[Automatic]` automatically determines the categories.

## Examples

```wolfram
NominalScale[{"Red", "Green", "Blue"}]
```

```wolfram
NominalScale[<|"A" -> "Category A", "B" -> "Category B"|>]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NominalScale.html) for more details.*