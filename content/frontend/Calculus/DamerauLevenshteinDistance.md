---
title: DamerauLevenshteinDistance
---

`DamerauLevenshteinDistance[u, v]` gives the Damerau–Levenshtein distance between strings or vectors u and v.

## Examples

Distance between strings:

```wolfram
DamerauLevenshteinDistance["hello", "hallo"]
(* 1 *)
```

With transposition:

```wolfram
DamerauLevenshteinDistance["ab", "ba"]
(* 1 *)
```

Compare to edit distance:

```wolfram
EditDistance["ab", "ba"]
(* 2 *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DamerauLevenshteinDistance.html) for more details.