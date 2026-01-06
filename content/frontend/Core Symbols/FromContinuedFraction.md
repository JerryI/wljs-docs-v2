# FromContinuedFraction

`FromContinuedFraction[list]` reconstructs a number from the list of its continued fraction terms.

## Examples

Reconstruct a number from continued fraction:

```wolfram
FromContinuedFraction[{3, 7, 15, 1}]
```

Verify with Pi:

```wolfram
FromContinuedFraction[ContinuedFraction[Pi, 10]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FromContinuedFraction.html) for more details.*