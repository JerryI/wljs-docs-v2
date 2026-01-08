---
title: SequencePosition
---

`SequencePosition[list, sublist]` gives a list of the starting and ending positions at which sublist appears in list.

`SequencePosition[list, patt]` gives all positions at which sequences matching patt occur in list.

`SequencePosition[list, patt, n]` includes only the first n occurrences.

## Examples

Find positions of a sublist:

```wolfram
SequencePosition[{a, b, c, a, b, d}, {a, b}]
(* {{1, 2}, {4, 5}} *)
```

Find consecutive integer pairs:

```wolfram
SequencePosition[{1, 2, 4, 5, 6}, {x_, y_} /; y == x + 1]
(* {{1, 2}, {3, 4}, {4, 5}} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SequencePosition.html) for more details.