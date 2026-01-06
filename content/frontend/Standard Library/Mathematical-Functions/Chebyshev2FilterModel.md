# Chebyshev2FilterModel

`Chebyshev2FilterModel[n]` creates a lowpass Chebyshev type 2 filter of order n.

`Chebyshev2FilterModel[{n, ωc}]` uses the cutoff frequency ωc.

`Chebyshev2FilterModel[{"type", spec}]` uses the full filter specification.

`Chebyshev2FilterModel[{"type", spec}, var]` expresses the model in terms of the variable var.

## Examples

Create a 4th order Chebyshev type 2 lowpass filter:

```wolfram
Chebyshev2FilterModel[4]
```

Specify cutoff frequency:

```wolfram
Chebyshev2FilterModel[{4, 1000}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Chebyshev2FilterModel.html) for more details.*