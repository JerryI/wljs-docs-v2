# MaxExtraConditions

`MaxExtraConditions` is an option to `Solve` and related functions that specifies how many extra equational conditions on continuous parameters to allow in solutions that are given.

## Examples

Allow extra conditions in solutions:

```wolfram
Solve[a x + b == 0, x, MaxExtraConditions -> 1]
(* {{x -> -b/a}} *)
```

Limit extra conditions:

```wolfram
Solve[a x^2 + b x + c == 0, x, MaxExtraConditions -> All]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MaxExtraConditions.html) for more details.*