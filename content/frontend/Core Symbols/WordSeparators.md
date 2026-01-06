# WordSeparators

`WordSeparators` is an option for `Read`, `Find`, and related functions that specifies the list of strings to be taken as delimiters for words.

## Examples

```wolfram
Read[stream, Word, WordSeparators -> {" ", ","}]
```

```wolfram
Read[StringToStream["a,b,c"], Word, WordSeparators -> {","}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/WordSeparators.html) for more details.*