---
title: Outer
---

`Outer[f, list1, list2, ...]` forms all combinations of elements from the lists and applies `f` to each combination.

## Examples

Create outer products:

```wolfram
(* All pairs *)
Outer[List, {a, b}, {1, 2, 3}]
(* {{{a, 1}, {a, 2}, {a, 3}}, {{b, 1}, {b, 2}, {b, 3}}} *)

(* Multiplication table *)
Outer[Times, Range[5], Range[5]] // MatrixForm

(* Tensor outer product *)
Outer[Times, {1, 2}, {3, 4}]
(* {{3, 4}, {6, 8}} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Outer.html) for more details.