# MatchQ

`MatchQ[expr, form]` returns `True` if expr matches the pattern form, and `False` otherwise.

## Examples

Match against a pattern:

```wolfram
MatchQ[{1, 2, 3}, {__Integer}]
(* True *)
```

Match head:

```wolfram
MatchQ[f[x, y], _f]
(* True *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MatchQ.html) for more details.*