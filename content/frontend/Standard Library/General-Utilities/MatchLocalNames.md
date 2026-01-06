---
title: MatchLocalNames
---

`MatchLocalNames` is an option for `Trace` and related functions that specifies whether symbols such as x should match symbols with local names of the form x$nnn.

This option controls pattern matching behavior for localized variables created by `Module`, `Block`, or `With`.

## Examples

```wolfram
Trace[Module[{x}, x + 1], x, MatchLocalNames -> True]
```

```wolfram
Trace[Block[{y = 5}, y^2], y, MatchLocalNames -> True]
```

```wolfram
Trace[With[{z = 3}, z*2], z, MatchLocalNames -> False]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MatchLocalNames.html) for more details.*