---
title: LetterNumber
---

`LetterNumber["c"]` gives the position of the character c in the English alphabet.

`LetterNumber["c",alpha]` gives the position of c in the alphabet specified by alpha.

`LetterNumber["string",…]` gives a list of the positions of characters in string.

## Examples

Get the position of a letter:

```wolfram
LetterNumber["d"]
(* 4 *)
```

Get positions for a string:

```wolfram
LetterNumber["hello"]
(* {8, 5, 12, 12, 15} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LetterNumber.html) for more details.