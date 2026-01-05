# PadRight

`PadRight[list, n]` pads a list to length `n` with zeros on the right. `PadRight[list, n, x]` uses element `x` for padding.

## Examples

Pad lists on the right:

```wolfram
PadRight[{1, 2, 3}, 6]
(* {1, 2, 3, 0, 0, 0} *)

PadRight[{a, b}, 5, "*"]
(* {a, b, "*", "*", "*"} *)

(* Make all sublists same length *)
lists = {{1}, {1, 2}, {1, 2, 3}}
PadRight[#, 4] & /@ lists
(* {{1, 0, 0, 0}, {1, 2, 0, 0}, {1, 2, 3, 0}} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PadRight.html) for more details.*