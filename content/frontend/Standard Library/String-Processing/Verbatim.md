# Verbatim

`Verbatim[expr]` represents expr in pattern matching, requiring that expr be matched exactly as it appears, with no substitutions for blanks or other transformations.

## Examples

Match a literal pattern:

```wolfram
MatchQ[_, Verbatim[_]]
(* True *)
```

Without Verbatim, blank matches anything:

```wolfram
MatchQ[x, _]
(* True *)
```

Match a specific function form:

```wolfram
Cases[{f[_], g[x], f[y]}, Verbatim[f[_]]]
(* {f[_]} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Verbatim.html) for more details.*