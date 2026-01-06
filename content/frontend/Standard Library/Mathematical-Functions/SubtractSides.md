# SubtractSides

`SubtractSides[rel, x]` subtracts x from each side of the equation or inequality rel.

- `SubtractSides[rel1, rel2]` subtracts the corresponding sides of two equations or inequalities.
- `SubtractSides[rel]` subtracts the right-hand side of rel from each side, producing a zero right-hand side.

This function is useful for manipulating equations and inequalities symbolically.

## Examples

```wolfram
SubtractSides[x + y == 5, y]
```

```wolfram
SubtractSides[a == b + c]
```

```wolfram
SubtractSides[x > 3, 1]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SubtractSides.html) for more details.*