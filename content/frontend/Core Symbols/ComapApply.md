# ComapApply

`ComapApply[{f1, f2, ...}, expr]` gives {Apply[f1, expr], Apply[f2, expr], ...}.

`ComapApply[fs]` represents an operator form of ComapApply that can be applied to an expression.

## Examples

Apply multiple functions to arguments:

```wolfram
ComapApply[{Plus, Times}, {1, 2, 3}]
(* {6, 6} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ComapApply.html) for more details.*