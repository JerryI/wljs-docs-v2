---
title: TimeObjectQ
---

`TimeObjectQ[expr]` gives `True` if expr is a `TimeObject` with valid arguments, and `False` otherwise.

## Examples

```wolfram
TimeObjectQ[TimeObject[{12, 30, 0}]]
```

```wolfram
TimeObjectQ[Now]
```

```wolfram
TimeObjectQ["not a time"]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TimeObjectQ.html) for more details.