# TransitionDuration

`TransitionDuration` is an option for `PaneSelector` that specifies the duration in seconds that a transition effect should last.

## Examples

```wolfram
PaneSelector[{1 -> "Panel 1", 2 -> "Panel 2"}, Dynamic[x], TransitionDuration -> 0.5]
```

```wolfram
Manipulate[x, {x, 1, 2, 1}, TransitionDuration -> 1]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TransitionDuration.html) for more details.*