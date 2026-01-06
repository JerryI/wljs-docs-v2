# TextStyle

`TextStyle` is an option for graphics functions and for `Text` which specifies the default style and font options with which text should be rendered.

## Examples

Set text style:

```wolfram
Graphics[Text["Hello", {0, 0}], TextStyle -> {FontSize -> 24, FontFamily -> "Arial"}]
```

In Plot:

```wolfram
Plot[Sin[x], {x, 0, 2 Pi}, TextStyle -> {FontSize -> 14}]
```

Bold text:

```wolfram
Graphics[Text["Bold", {0, 0}], TextStyle -> {FontWeight -> Bold}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TextStyle.html) for more details.*