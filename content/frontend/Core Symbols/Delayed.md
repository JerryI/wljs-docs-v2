# Delayed

`Delayed[expr]` represents an expression whose evaluation is delayed until its value is externally requested.

`Delayed[expr, fmt]` specifies that the result from evaluating expr should be given in format fmt.

`Delayed[expr, {fmt, rform}]` specifies that the result should be given as a response of the form rform.

## Examples

Create a delayed expression:

```wolfram
Delayed[RandomReal[]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Delayed.html) for more details.*