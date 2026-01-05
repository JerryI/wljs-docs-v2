# EstimatedBackground

`EstimatedBackground[data]` estimates the background of data.

`EstimatedBackground[data, σ]` tries to preserve peaks up to scale σ.

## Examples

Estimate background from noisy data:

```wolfram
data = Table[Sin[x] + RandomReal[0.1], {x, 0, 10, 0.1}];
EstimatedBackground[data]
```

Preserve peaks with a specific scale:

```wolfram
EstimatedBackground[data, 5]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EstimatedBackground.html) for more details.*