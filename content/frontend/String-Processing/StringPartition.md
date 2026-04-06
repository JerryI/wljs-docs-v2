---
title: StringPartition
---

`StringPartition["string", n]` partitions string into nonoverlapping substrings of length n.

`StringPartition["string", n, d]` generates substrings with offset d.

## Examples

Partition into chunks:

```wolfram
StringPartition["abcdefgh", 2]
(* {"ab", "cd", "ef", "gh"} *)
```

Overlapping partitions:

```wolfram
StringPartition["abcdef", 3, 1]
(* {"abc", "bcd", "cde", "def"} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StringPartition.html) for more details.