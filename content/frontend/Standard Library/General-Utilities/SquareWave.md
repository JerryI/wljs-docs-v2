# SquareWave

`SquareWave[x]` gives a square wave that alternates between +1 and -1 with unit period.

`SquareWave[{y1, y2}, x]` gives a square wave that alternates between y1 and y2 with unit period.

## Examples

Plot a square wave:

```wolfram
Plot[SquareWave[x], {x, 0, 3}]
```

Square wave alternating between 0 and 5:

```wolfram
Plot[SquareWave[{0, 5}, x], {x, 0, 3}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SquareWave.html) for more details.*