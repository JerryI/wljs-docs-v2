---
title: SubsetPosition
---

`SubsetPosition[list, sublist]` gives a list of positions at which sublist appears in list in any order.

- `SubsetPosition[list, patt]` gives all positions at which sublists matching patt in any order appear in list.
- `SubsetPosition[list, patt, n]` includes only the first n positions.

## Examples

```wolfram
SubsetPosition[{a, b, c, d, e}, {b, d}]
```

```wolfram
SubsetPosition[{1, 2, 3, 4, 5}, {2, 4}, 1]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SubsetPosition.html) for more details.*