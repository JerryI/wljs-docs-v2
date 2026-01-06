# ReplacePart

`ReplacePart[expr, i -> new]` yields an expression in which the ith part is replaced by new.

## Examples

Replace at position:

```wolfram
ReplacePart[{a, b, c, d}, 2 -> x]
(* {a, x, c, d} *)
```

Replace multiple parts:

```wolfram
ReplacePart[{a, b, c, d}, {1 -> x, 3 -> y}]
(* {x, b, y, d} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ReplacePart.html) for more details.*