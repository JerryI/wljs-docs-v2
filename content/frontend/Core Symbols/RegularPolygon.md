# RegularPolygon

`RegularPolygon[n]` gives the regular polygon with n vertices equally spaced around the unit circle.

`RegularPolygon[r, n]` gives the regular polygon of radius r.

`RegularPolygon[{r, θ}, n]` starts at angle θ with respect to the x axis.

`RegularPolygon[{x, y}, rspec, n]` centers the polygon at {x, y}.

## Examples

Create a pentagon:

```wolfram
Graphics[RegularPolygon[5]]
```

Create a hexagon with radius 2:

```wolfram
Graphics[RegularPolygon[2, 6]]
```

Centered at a specific point:

```wolfram
Graphics[RegularPolygon[{1, 1}, 1, 4]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RegularPolygon.html) for more details.*