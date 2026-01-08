---
title: Longest
---

`Longest[p]` is a pattern object that matches the longest sequence consistent with the pattern p.

## Examples

Match longest sequence:

```wolfram
StringCases["aabbbcc", Longest[a ~~ __ ~~ c]]
(* {"aabbbc"} *)
```

Compare with Shortest:

```wolfram
{StringCases["aabbcc", Longest[a ~~ __ ~~ c]], 
 StringCases["aabbcc", Shortest[a ~~ __ ~~ c]]}
(* {{"aabbc"}, {"abc"}} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Longest.html) for more details.