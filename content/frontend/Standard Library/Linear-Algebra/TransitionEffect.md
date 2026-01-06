# TransitionEffect

`TransitionEffect` is an option for `PaneSelector` that specifies the visual effect used when transitioning between states.

## Examples

```wolfram
PaneSelector[{1 -> "One", 2 -> "Two"}, Dynamic[x], TransitionEffect -> "Fade"]
```

```wolfram
PaneSelector[{a -> "A", b -> "B"}, Dynamic[state], TransitionEffect -> None]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TransitionEffect.html) for more details.*