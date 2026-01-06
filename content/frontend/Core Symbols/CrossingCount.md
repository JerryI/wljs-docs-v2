# CrossingCount

`CrossingCount[contour, p]` gives a count of the number of times a ray starting from the point p crosses the closed curve contour.

## Examples

Count ray crossings for a polygon:

```wolfram
polygon = Polygon[{{0, 0}, {1, 0}, {1, 1}, {0, 1}}];
CrossingCount[polygon, {0.5, 0.5}]
(* 1 - point is inside *)
```

Point outside:

```wolfram
CrossingCount[polygon, {2, 2}]
(* 0 - point is outside *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CrossingCount.html) for more details.*