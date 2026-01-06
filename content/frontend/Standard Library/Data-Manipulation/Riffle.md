# Riffle

`Riffle[{e1, e2, ...}, x]` interleaves `x` between elements: `{e1, x, e2, x, ...}`.

## Examples

Interleave elements:

```wolfram
Riffle[{a, b, c}, "-"]
(* {a, "-", b, "-", c} *)

(* With multiple separators *)
Riffle[{1, 2, 3}, {a, b}]
(* {1, a, 2, b, 3} *)

(* Join strings with separator *)
StringJoin[Riffle[{"a", "b", "c"}, ","]]
(* "a,b,c" *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Riffle.html) for more details.*