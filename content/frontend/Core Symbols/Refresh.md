# Refresh

`Refresh[expr, interval, opts]` represents an object whose value should be refreshed at times specified by the options opts.

## Examples

Refresh a random number every second:

```wolfram
Dynamic[Refresh[RandomReal[], UpdateInterval -> 1]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Refresh.html) for more details.*