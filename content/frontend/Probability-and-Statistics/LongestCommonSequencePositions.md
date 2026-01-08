---
title: LongestCommonSequencePositions
---

`LongestCommonSequencePositions[s1, s2]` finds the longest sequence of contiguous or disjoint elements common to the strings, lists or biomolecular sequences s1 and s2 and returns their positions.

## Examples

Find common subsequence positions in strings:

```wolfram
LongestCommonSequencePositions["ABCDEF", "ACDF"]
(* {{1, 3, 4, 6}, {1, 2, 3, 4}} *)
```

For lists:

```wolfram
LongestCommonSequencePositions[{a, b, c, d}, {b, c, e, d}]
```

Compare sequences:

```wolfram
s1 = "GCTAGC";
s2 = "GCTAAGC";
LongestCommonSequencePositions[s1, s2]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LongestCommonSequencePositions.html) for more details.