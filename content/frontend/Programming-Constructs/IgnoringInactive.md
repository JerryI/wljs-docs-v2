---
title: IgnoringInactive
---

`IgnoringInactive[patt]` is a pattern object that, for purposes of pattern matching, ignores occurrences of `Inactive` in both patt and the expression being matched.

## Examples

```wolfram
MatchQ[Inactive[Plus][1, 2], IgnoringInactive[Plus[1, 2]]]
```

```wolfram
Cases[{Inactive[f][x], g[x]}, IgnoringInactive[f[_]]]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/IgnoringInactive.html) for more details.