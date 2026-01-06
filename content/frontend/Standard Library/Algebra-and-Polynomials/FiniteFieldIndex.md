# FiniteFieldIndex

`FiniteFieldIndex[u]` gives the index of the FiniteFieldElement object u.

## Examples

Get the index of a finite field element:

```wolfram
ff = FiniteField[2, 3];
a = ff["PrimitiveElement"];
FiniteFieldIndex[a]
```

Get indices for powers of the primitive element:

```wolfram
Table[FiniteFieldIndex[a^k], {k, 0, 6}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FiniteFieldIndex.html) for more details.*