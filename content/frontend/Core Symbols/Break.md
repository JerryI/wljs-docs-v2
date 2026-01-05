# Break

`Break[]` exits the nearest enclosing `Do`, `For`, `While`, or `Until` loop.

## Examples

Break out of a loop:

```wolfram
Do[
  If[i > 5, Break[]];
  Print[i],
  {i, 1, 10}
]
(* prints 1, 2, 3, 4, 5 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Break.html) for more details.*