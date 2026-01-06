# Chebyshev1FilterModel

`Chebyshev1FilterModel[n]` creates a lowpass Chebyshev type 1 filter of order n.

`Chebyshev1FilterModel[{n, ωc}]` uses the cutoff frequency ωc.

`Chebyshev1FilterModel[{"type", spec}]` creates a filter of a given "type" using the specified parameters spec.

`Chebyshev1FilterModel[{"type", spec}, var]` expresses the model in terms of the variable var.

## Examples

Create a Chebyshev type 1 lowpass filter:

```wolfram
Chebyshev1FilterModel[3]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Chebyshev1FilterModel.html) for more details.*