# WakebyDistribution

`WakebyDistribution[α, β, γ, δ, μ]` represents Wakeby distribution with shape parameters β and δ, scale parameters α and γ, and location parameter μ.

## Examples

Create a Wakeby distribution:

```wolfram
WakebyDistribution[1, 0.5, 1, 0.5, 0]
(* WakebyDistribution[1, 0.5, 1, 0.5, 0] *)
```

Generate random samples:

```wolfram
RandomVariate[WakebyDistribution[1, 0.5, 1, 0.5, 0], 5]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/WakebyDistribution.html) for more details.*