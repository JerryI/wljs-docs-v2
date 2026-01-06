---
title: LinkPatterns
---

`LinkPatterns[link]` gives a list of the patterns for which definitions were set up when the external program associated with the specified WSTP connection was installed.

## Examples

Get patterns from an installed link:

```wolfram
link = Install["program"];
LinkPatterns[link]
```

Check available functions:

```wolfram
Length[LinkPatterns[link]]
```

View pattern details:

```wolfram
LinkPatterns[link][[1]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LinkPatterns.html) for more details.*