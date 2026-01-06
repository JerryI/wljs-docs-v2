---
title: SectorOrigin
---

`SectorOrigin` is an option to `PieChart` and related functions that specifies where sectors should start.

This option controls the starting angle and direction of pie chart sectors.

## Examples

```wolfram
PieChart[{1, 2, 3, 4}, SectorOrigin -> {Automatic, 1}]
```

```wolfram
PieChart[{1, 2, 3}, SectorOrigin -> {{Pi/2, "Clockwise"}, 1}]
```

```wolfram
PieChart[{2, 3, 5}, SectorOrigin -> {0, "Counterclockwise"}]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SectorOrigin.html) for more details.*