# PositionIndex

`PositionIndex[list]` gives an association between unique elements in list and the positions at which they occur.

- `PositionIndex[assoc]` gives an association whose keys are the distinct values in assoc, and whose values are lists of the keys with which they are associated.

## Examples

```wolfram
PositionIndex[{a, b, c, a, b, a}]
```

```wolfram
PositionIndex[<|"x" -> 1, "y" -> 2, "z" -> 1|>]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PositionIndex.html) for more details.*