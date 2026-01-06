# BlackmanHarrisWindow

`BlackmanHarrisWindow[x]` represents a Blackman–Harris window function of x.

## Examples

Plot the Blackman-Harris window:

```wolfram
Plot[BlackmanHarrisWindow[x], {x, -1, 1}]
```

Apply to signal processing:

```wolfram
ListPlot[Table[BlackmanHarrisWindow[x], {x, -1, 1, 0.05}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BlackmanHarrisWindow.html) for more details.*