---
title: Containing
---

`Containing["outer", "inner"]` represents an object of type outer containing objects of type inner.

## Examples

Match strings containing URLs:

```wolfram
TextCases["Visit http://example.com today", Containing["Sentence", "URL"]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Containing.html) for more details.*