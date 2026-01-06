# UniformDistribution

`UniformDistribution[{min, max}]` represents a continuous uniform distribution between min and max. `UniformDistribution[]` gives values between 0 and 1.

## Examples

Random samples:

```wolfram
RandomVariate[UniformDistribution[{0, 10}], 5]
(* {3.2, 7.8, 1.5, 9.2, 4.6} *)
```

Mean and variance:

```wolfram
Mean[UniformDistribution[{0, 1}]]
(* 1/2 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/UniformDistribution.html) for more details.*