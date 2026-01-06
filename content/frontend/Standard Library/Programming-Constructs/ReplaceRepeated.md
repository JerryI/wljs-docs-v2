# ReplaceRepeated

`expr//.rules` repeatedly performs replacements until expr no longer changes.

`ReplaceRepeated[rules]` represents an operator form of ReplaceRepeated that can be applied to an expression.

## Examples

```wolfram
{a, b, {c, {d}}} //. List[x_] :> x
(* {a, b, c, d} *)
```

```wolfram
x^2 + x //. x -> 2
(* 6 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ReplaceRepeated.html) for more details.*