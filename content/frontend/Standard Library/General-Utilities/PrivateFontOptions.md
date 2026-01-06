# PrivateFontOptions

`PrivateFontOptions` is an option for selections that specifies settings for various font suboptions.

This option provides fine-grained control over font rendering.

## Examples

```wolfram
Style["Hello", PrivateFontOptions -> {"OperatorSubstitution" -> False}]
```

```wolfram
Cell["Text", PrivateFontOptions -> {"FontType" -> "Outline"}]
```

```wolfram
Style[expr, PrivateFontOptions -> {"CharacterEncoding" -> "UTF-8"}]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PrivateFontOptions.html) for more details.*