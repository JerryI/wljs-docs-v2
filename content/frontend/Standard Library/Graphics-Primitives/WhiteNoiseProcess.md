# WhiteNoiseProcess

`WhiteNoiseProcess[]` represents a Gaussian white noise process with mean 0 and standard deviation 1.

`WhiteNoiseProcess[σ]` represents a Gaussian white noise process with mean 0 and standard deviation σ.

`WhiteNoiseProcess[dist]` represents a white noise process based on the distribution dist.

## Examples

Create a standard white noise process:

```wolfram
WhiteNoiseProcess[]
(* WhiteNoiseProcess[NormalDistribution[0, 1]] *)
```

Sample from a white noise process:

```wolfram
RandomFunction[WhiteNoiseProcess[], {0, 10}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/WhiteNoiseProcess.html) for more details.*