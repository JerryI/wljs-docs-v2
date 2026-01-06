# AbsoluteOptions

`AbsoluteOptions[obj]` gives the absolute settings of options used by the given object.

`AbsoluteOptions[obj, name]` gives the absolute setting for the option name.

`AbsoluteOptions[obj, {name1, name2, ...}]` gives a list of the absolute settings for the options namei.

## Examples

Get the absolute options of a plot:

```wolfram
plot = Plot[Sin[x], {x, 0, 2 Pi}];
AbsoluteOptions[plot, PlotRange]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AbsoluteOptions.html) for more details.*