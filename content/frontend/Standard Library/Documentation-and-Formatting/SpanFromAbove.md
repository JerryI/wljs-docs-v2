# SpanFromAbove

`SpanFromAbove` is a symbol that can appear at a particular position in a `Grid` or related construct to indicate that the corresponding position is occupied by a spanning element that appears above it.

## Examples

Create a grid with cells spanning multiple rows:
```wolfram
Grid[{{"Header", SpanFromLeft}, {"Row 1", "Data"}, {SpanFromAbove, "More"}}, Frame -> All]
```

Span a cell downward:
```wolfram
Grid[{{"A", "B"}, {"C", SpanFromAbove}}, Frame -> All]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SpanFromAbove.html) for more details.*