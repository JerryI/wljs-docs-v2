# WordStem

`WordStem["word"]` gives a stemmed form of word, removing plurals, inflections, etc.

## Examples

Stem a word:

```wolfram
WordStem["running"]
(* "run" *)
```

Stem plural forms:

```wolfram
WordStem["cats"]
(* "cat" *)
```

Apply to multiple words:

```wolfram
WordStem /@ {"playing", "played", "plays"}
(* {"play", "play", "play"} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/WordStem.html) for more details.*