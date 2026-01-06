---
title: AtomCoordinates
---

`AtomCoordinates` is an option for `Molecule` and related functions that specifies the three-dimensional coordinates of the atoms.

## Examples

Set 3D coordinates:

```wolfram
Molecule[{"H", "H"}, {Bond[{1, 2}]}, 
  AtomCoordinates -> {{0, 0, 0}, {0, 0, 0.74}}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AtomCoordinates.html) for more details.*