---
title: NullWords
---

`NullWords` is an option for `Read` and related functions which specifies whether null words should be taken to exist between repeated word separators.

## Examples

```wolfram
ReadList[StringToStream["a  b  c"], Word, NullWords -> True]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NullWords.html) for more details.*