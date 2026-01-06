# EqualTo

`EqualTo[y]` is an operator form that yields x == y when applied to an expression x.

## Examples

Use as an operator:

```wolfram
EqualTo[5][5]
(* True *)
```

Filter equal elements:

```wolfram
Select[{1, 2, 3, 4, 5}, EqualTo[3]]
(* {3} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EqualTo.html) for more details.*