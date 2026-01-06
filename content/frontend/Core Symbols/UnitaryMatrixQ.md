# UnitaryMatrixQ

`UnitaryMatrixQ[m]` gives `True` if m is a unitary matrix, and `False` otherwise.

A unitary matrix satisfies m†·m = I (conjugate transpose times itself equals identity).

## Examples

```wolfram
UnitaryMatrixQ[{{1, 0}, {0, 1}}]
```

```wolfram
UnitaryMatrixQ[{{1, 1}, {1, -1}}/Sqrt[2]]
```

```wolfram
UnitaryMatrixQ[{{1, 2}, {3, 4}}]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/UnitaryMatrixQ.html) for more details.*