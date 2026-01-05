# BlankNullSequence

`___` (three underscores) or `BlankNullSequence[]` is a pattern that can stand for any sequence of zero or more expressions.

## Examples

Match zero or more arguments:

```wolfram
f[x___] := Length[{x}]
f[]
(* 0 *)

f[a, b, c]
(* 3 *)
```

Extract first element or default:

```wolfram
{1, 2, 3} /. {x_, ___} :> x
(* 1 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BlankNullSequence.html) for more details.*