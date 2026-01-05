# TrackingFunction

`TrackingFunction` is an option for `Manipulate` controls that specifies functions to use during interactive changing or editing.

## Examples

Track slider changes:

```wolfram
Manipulate[x, {x, 0, 1}, TrackingFunction -> (Print[#] &)]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TrackingFunction.html) for more details.*