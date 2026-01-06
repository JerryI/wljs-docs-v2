---
title: TokenWords
---

`TokenWords` is an option for `Read` and related functions which gives a list of token words to be used to delimit words.

## Examples

```wolfram
Read[StringToStream["hello+world"], Word, TokenWords -> {"+"}]
```

```wolfram
Read[stream, Word, TokenWords -> {",", ";"}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TokenWords.html) for more details.*