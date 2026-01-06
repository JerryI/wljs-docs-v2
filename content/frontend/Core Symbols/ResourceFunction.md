# ResourceFunction

`ResourceFunction[resource]` represents the function associated with the specified resource.

- `ResourceFunction[resource, prop]` gives the specified property of the resource.

This function accesses functions from the Wolfram Function Repository.

## Examples

```wolfram
ResourceFunction["MonthlyCalendar"][2024, 1]
```

```wolfram
ResourceFunction["ColorMaps"]["Viridis"]
```

```wolfram
ResourceFunction["PlotGrid"][{Plot[Sin[x], {x, 0, 2 Pi}], Plot[Cos[x], {x, 0, 2 Pi}]}]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ResourceFunction.html) for more details.*