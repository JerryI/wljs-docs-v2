---
title: AllowLooseGrammar
---

`AllowLooseGrammar` is an option for `GrammarRules` and related functions that specifies whether grammatical "fluff" should automatically be ignored in applying grammar rules.

## Examples

Allow loose matching in grammar:

```wolfram
GrammarRules[{"hello" -> "greeting"}, AllowLooseGrammar -> True]
(* GrammarRules[...] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AllowLooseGrammar.html) for more details.*