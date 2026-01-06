---
title: TextWords
---

`TextWords["string"]` gives a list of the runs of characters identified as words in string.

- `TextWords["string", n]` gives the first n words in string.

## Examples

Extract all words:

```wolfram
TextWords["The quick brown fox"]
(* {"The", "quick", "brown", "fox"} *)
```

Get first 3 words:

```wolfram
TextWords["Hello world, this is a test", 3]
(* {"Hello", "world", "this"} *)
```

Count words in text:

```wolfram
Length[TextWords["One two three four five"]]
(* 5 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TextWords.html) for more details.*