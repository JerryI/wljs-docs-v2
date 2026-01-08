---
title: SequenceCases
---

`SequenceCases[list, patt]` gives a list of the sublists in list that match the sequence pattern patt.

`SequenceCases[list, patt -> rhs]` gives a list of the values of rhs corresponding to sublists that match patt.

`SequenceCases[list, patt, n]` includes only the first n matches.

## Examples

Find consecutive pairs:

```wolfram
SequenceCases[{a, b, c, d}, {x_, y_}]
(* {{a, b}, {c, d}} *)
```

Extract matching sequences:

```wolfram
SequenceCases[{1, 2, 3, 4, 5}, {x_, y_} /; y == x + 1]
(* {{1, 2}, {2, 3}, {3, 4}, {4, 5}} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SequenceCases.html) for more details.