---
title: MixedMagnitude
---

`MixedMagnitude[{val1, val2, ..., valn}]` represents a mixed-magnitude expression consisting of values val1 through valn.

This is used with `MixedUnit` to represent quantities with multiple unit components.

## Examples

```wolfram
MixedMagnitude[{5, 30, 15}]
```

```wolfram
Quantity[MixedMagnitude[{1, 30}], MixedUnit[{"Hours", "Minutes"}]]
```

```wolfram
UnitConvert[Quantity[90, "Minutes"], MixedUnit[{"Hours", "Minutes"}]]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MixedMagnitude.html) for more details.*