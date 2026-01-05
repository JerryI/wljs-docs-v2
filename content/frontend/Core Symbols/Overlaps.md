# Overlaps

`Overlaps` is an option to string and sequence functions that specifies how to treat overlapping substrings.

## Examples

Find overlapping occurrences:

```wolfram
StringPosition["ababa", "aba", Overlaps -> True]
(* {{1, 3}, {3, 5}} *)
```

Find non-overlapping occurrences:

```wolfram
StringPosition["ababa", "aba", Overlaps -> False]
(* {{1, 3}} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Overlaps.html) for more details.*