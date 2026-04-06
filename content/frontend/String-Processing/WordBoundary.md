---
title: WordBoundary
---

`WordBoundary` represents a boundary between words for purposes of matching in `StringExpression`.

## Examples

```wolfram
StringMatchQ["hello world", __ ~~ WordBoundary ~~ __]
(* True *)
```

```wolfram
StringCases["the cat sat", WordBoundary ~~ LetterCharacter.. ~~ WordBoundary]
(* {"the", "cat", "sat"} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/WordBoundary.html) for more details.