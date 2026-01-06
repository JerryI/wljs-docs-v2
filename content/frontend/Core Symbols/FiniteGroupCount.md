# FiniteGroupCount

`FiniteGroupCount[n]` gives the number of finite groups of order n.

## Examples

Count finite groups of order 8:

```wolfram
FiniteGroupCount[8]
```

Compare with Abelian group counts:

```wolfram
Table[{FiniteGroupCount[n], FiniteAbelianGroupCount[n]}, {n, 1, 12}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FiniteGroupCount.html) for more details.*