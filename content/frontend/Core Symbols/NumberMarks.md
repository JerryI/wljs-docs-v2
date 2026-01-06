# NumberMarks

`NumberMarks` is an option for `InputForm` and related functions that specifies whether ` marks should be included in the printed forms of approximate numbers.

## Examples

```wolfram
InputForm[3.14, NumberMarks -> True]
```

```wolfram
ToString[1.5, NumberMarks -> False]
```

```wolfram
SetOptions[InputForm, NumberMarks -> False]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NumberMarks.html) for more details.*