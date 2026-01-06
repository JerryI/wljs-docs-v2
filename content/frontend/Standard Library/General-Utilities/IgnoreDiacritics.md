---
title: IgnoreDiacritics
---

`IgnoreDiacritics` is an option for string, grammar, and related functions that specifies whether diacritics should be ignored in strings.

## Examples

Match strings ignoring diacritics:

```wolfram
StringMatchQ["café", "cafe", IgnoreDiacritics -> True]
(* True *)
```

Search ignoring diacritics:

```wolfram
StringContainsQ["résumé", "resume", IgnoreDiacritics -> True]
(* True *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/IgnoreDiacritics.html) for more details.*