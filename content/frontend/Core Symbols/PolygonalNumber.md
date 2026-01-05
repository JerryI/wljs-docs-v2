# PolygonalNumber

`PolygonalNumber[n]` gives the nth triangular number. `PolygonalNumber[r, n]` gives the nth r-gonal number.

## Examples

Triangular numbers:

```wolfram
Table[PolygonalNumber[n], {n, 6}]
(* {1, 3, 6, 10, 15, 21} *)
```

Square numbers (4-gonal):

```wolfram
Table[PolygonalNumber[4, n], {n, 5}]
(* {1, 4, 9, 16, 25} *)
```

Pentagonal numbers:

```wolfram
PolygonalNumber[5, 10]
(* 145 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PolygonalNumber.html) for more details.*