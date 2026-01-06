# GeoGridDirectionDifference

`GeoGridDirectionDifference[proj, loc, β]` gives the difference between the angle from north to direction `β` on the geo grid obtained with projection `proj` and the actual angle from north to direction `β` at location `loc`.

- `GeoGridDirectionDifference[proj, loc, α -> β]` gives the difference between projected and unprojected angles from direction `α` to direction `β`.

## Examples

```wolfram
GeoGridDirectionDifference["Mercator", GeoPosition[{45, 10}], 45 Degree]
```

```wolfram
GeoGridDirectionDifference["LambertConformalConic", Here, 0 -> 90 Degree]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GeoGridDirectionDifference.html) for more details.*