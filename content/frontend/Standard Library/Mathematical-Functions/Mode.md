# Mode

`Mode` is an option to `Eliminate` and related functions that specifies in what sense the equations are to be solved. The possible settings for Mode are `Generic`, `Modular`, and `Rational`.

## Examples

```wolfram
Eliminate[{a x + b y == 0, c x + d y == 0}, y, Mode -> Generic]
```

```wolfram
Eliminate[{x + y == 1, x - y == 0}, y, Mode -> Rational]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Mode.html) for more details.*