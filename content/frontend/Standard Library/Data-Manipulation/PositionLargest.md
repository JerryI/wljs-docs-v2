---
title: PositionLargest
---

`PositionLargest[list]` gives the positions of the numerically largest value in list.

- `PositionLargest[list, n]` gives the positions of the first n largest values.
- `PositionLargest[list, n, orderfun]` gives the positions of the n largest values in list as determined by orderfun.

## Examples

Find the position of the largest element:
```wolfram
PositionLargest[{3, 1, 4, 1, 5, 9, 2, 6}]
```

Find positions of the 3 largest elements:
```wolfram
PositionLargest[{3, 1, 4, 1, 5, 9, 2, 6}, 3]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PositionLargest.html) for more details.*