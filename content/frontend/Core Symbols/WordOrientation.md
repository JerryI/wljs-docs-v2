# WordOrientation

`WordOrientation` is an option for `WordCloud` that specifies the orientations in which words appear.

## Examples

Horizontal only:

```wolfram
WordCloud[{"apple", "banana", "cherry"}, WordOrientation -> "Horizontal"]
```

Mixed orientations:

```wolfram
WordCloud[{"apple", "banana", "cherry"}, WordOrientation -> "Random"]
```

Custom angles:

```wolfram
WordCloud[{"apple", "banana", "cherry"}, WordOrientation -> {0, Pi/4, Pi/2}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/WordOrientation.html) for more details.*