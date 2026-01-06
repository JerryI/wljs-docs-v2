# ComposeList

`ComposeList[{f1, f2, ...}, x]` generates a list of the form {x, f1[x], f2[f1[x]], ...}.

## Examples

Generate a composition list:

```wolfram
ComposeList[{Sin, Cos, Tan}, 0.5]
(* {0.5, 0.479426, 0.877583, 1.18678} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ComposeList.html) for more details.*