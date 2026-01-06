# TransferFunctionZeros

`TransferFunctionZeros[tfm]` gives a matrix of roots of the numerators in the TransferFunctionModel tfm.

- `TransferFunctionZeros[tfm, reg]` only gives the roots inside the region reg on the complex plane.

## Examples

```wolfram
TransferFunctionZeros[TransferFunctionModel[{{s + 1}}/{{s^2 + 2 s + 1}}, s]]
```

```wolfram
tf = TransferFunctionModel[(s - 1)/(s^2 + s + 1), s];
TransferFunctionZeros[tf]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TransferFunctionZeros.html) for more details.*