---
title: JoinAcross
---

`JoinAcross[{a1, a2, ...}, {b1, b2, ...}, key]` gives a list of associations obtained by joining those pairs of associations ai and bj in which the values associated with key are the same.

- `JoinAcross[{a1, a2, ...}, {b1, b2, ...}, {key1, key2, ...}]` joins pairs of associations only when the values associated with all keys keyi are the same.
- `JoinAcross[{a1, a2, ...}, {b1, b2, ...}, keya -> keyb]` joins pairs of associations ai, bj in which the values associated with keya in the ai are the same as those associated with keyb in the bj.
- `JoinAcross[alist, blist, keyspec, "joinspec"]` uses joinspec to determine when to allow associations that contain missing elements to be generated.

## Examples

```wolfram
JoinAcross[{<|"a" -> 1, "b" -> 2|>}, {<|"a" -> 1, "c" -> 3|>}, "a"]
```

```wolfram
JoinAcross[{<|"x" -> 1|>, <|"x" -> 2|>}, {<|"x" -> 1, "y" -> 10|>}, "x"]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/JoinAcross.html) for more details.