# Thin

`Thin` is a graphics directive that specifies that lines which follow should be drawn thin.

## Examples

Draw thin lines:

```wolfram
Graphics[{Thin, Line[{{0, 0}, {1, 1}}]}]
```

Compare different line styles:

```wolfram
Graphics[{
  Thin, Line[{{0, 0}, {1, 0}}],
  Thick, Line[{{0, 0.5}, {1, 0.5}}]
}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Thin.html) for more details.*