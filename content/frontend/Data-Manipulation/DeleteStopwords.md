---
title: DeleteStopwords
---

`DeleteStopwords[list]` deletes stopwords from a list of words.

`DeleteStopwords["string"]` deletes stopwords from a string.

`DeleteStopwords[{string1, string2, ...}]` deletes stopwords from a list of strings.

## Examples

Remove stopwords from a sentence:

```wolfram
DeleteStopwords["The quick brown fox jumps over the lazy dog"]
(* "quick brown fox jumps lazy dog" *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DeleteStopwords.html) for more details.*