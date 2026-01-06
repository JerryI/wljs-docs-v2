# SimilarityRules

`SimilarityRules` is an option for functions such as `SequenceAlignment` that gives a list of rules for similarity scores to assume between pairs of elements.

## Examples

```wolfram
SequenceAlignment["abc", "abd", SimilarityRules -> {{"c", "d"} -> 0.5}]
```

```wolfram
SequenceAlignment[{1, 2, 3}, {1, 4, 3}, SimilarityRules -> {{2, 4} -> 0.8}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SimilarityRules.html) for more details.*