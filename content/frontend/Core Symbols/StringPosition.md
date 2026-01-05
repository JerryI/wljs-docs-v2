# StringPosition

`StringPosition["string", "sub"]` gives a list of `{start, end}` positions where the substring appears.

`StringPosition["string", patt, n]` includes only the first n occurrences.

## Examples

Find positions:

```wolfram
StringPosition["abcabc", "bc"]
(* {{2, 3}, {5, 6}} *)
```

First occurrence only:

```wolfram
StringPosition["abcabc", "bc", 1]
(* {{2, 3}} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StringPosition.html) for more details.*