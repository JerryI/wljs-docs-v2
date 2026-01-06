# HeavisidePi

`HeavisidePi[x]` represents the box distribution Π(x), equal to 1 for |x| < 1/2 and 0 for |x| > 1/2.

- `HeavisidePi[x1, x2, ...]` represents the multidimensional box distribution which is 1 if all |xi| < 1/2.

## Examples

```wolfram
HeavisidePi[0.3]
```

```wolfram
Plot[HeavisidePi[x], {x, -1, 1}]
```

```wolfram
HeavisidePi[0.2, 0.3]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/HeavisidePi.html) for more details.*