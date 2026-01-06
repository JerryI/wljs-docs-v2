# TouchscreenControlPlacement

`TouchscreenControlPlacement` is an option for `Manipulate` that determines the placement of the slide-out control panel on supported touchscreen platforms.

This option controls where the controls appear on touch-enabled devices.

## Examples

```wolfram
Manipulate[Sin[x*n], {n, 1, 5}, TouchscreenControlPlacement -> Left]
```

```wolfram
Manipulate[Plot[Sin[a*x], {x, 0, 2 Pi}], {a, 1, 5}, 
  TouchscreenControlPlacement -> Bottom]
```

```wolfram
Options[Manipulate, TouchscreenControlPlacement]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TouchscreenControlPlacement.html) for more details.*