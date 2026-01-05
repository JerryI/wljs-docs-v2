# Accumulate

`Accumulate[list]` gives a list of cumulative sums (running totals) of the elements.

## Examples

Compute cumulative sums:

```wolfram
Accumulate[{1, 2, 3, 4, 5}]
(* {1, 3, 6, 10, 15} *)

(* Cumulative product using FoldList *)
FoldList[Times, 1, {1, 2, 3, 4}]
(* {1, 1, 2, 6, 24} *)

(* Verify: Total of Accumulate *)
Total[{1, 2, 3, 4}]
(* 10 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Accumulate.html) for more details.*