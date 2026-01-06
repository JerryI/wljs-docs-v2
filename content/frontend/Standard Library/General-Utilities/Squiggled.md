# Squiggled

`Squiggled[expr]` displays expr with text underlined with a squiggly red underline.

- `Squiggled[expr, color]` displays squiggly using the specified color.

## Examples

Display text with red squiggly underline:

```wolfram
Squiggled["misspelled"]
```

Use a custom color for the squiggle:

```wolfram
Squiggled["warning", Orange]
```

In a sentence:

```wolfram
Row[{"This word is ", Squiggled["incorect"], " spelled."}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Squiggled.html) for more details.*