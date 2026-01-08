---
title: CharacterCounts
---

`CharacterCounts["string"]` gives an association whose keys are the distinct characters in string, and whose values give the number of times those characters appear.

`CharacterCounts["string", n]` gives counts of distinct n-grams consisting of runs of n characters.

## Examples

Count characters in a string:

```wolfram
CharacterCounts["hello"]
(* <|"h" -> 1, "e" -> 1, "l" -> 2, "o" -> 1|> *)
```

Count bigrams:

```wolfram
CharacterCounts["banana", 2]
(* <|"ba" -> 1, "an" -> 2, "na" -> 2|> *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CharacterCounts.html) for more details.