# TrueQ

`TrueQ[expr]` yields `True` if expr is explicitly `True`, and `False` otherwise.

## Examples

Test for True:

```wolfram
TrueQ[True]
(* True *)
```

```wolfram
TrueQ[False]
(* False *)
```

Unevaluated expressions give False:

```wolfram
TrueQ[x > 0]
(* False *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TrueQ.html) for more details.*