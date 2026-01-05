# RectangularRepeatingElement

`RectangularRepeatingElement[elem]` represents a rectangular array of elements of type elem in an interpreter, API or form specification.

`RectangularRepeatingElement[elem, {maxrows, maxcols}]` specifies maximum dimensions.

`RectangularRepeatingElement[elem, {{minrows, maxrows}, {mincols, maxcols}}]` specifies dimension ranges.

## Examples

Create a form with a grid of number inputs:

```wolfram
FormFunction[
  "matrix" -> RectangularRepeatingElement["Number", {3, 3}],
  Identity
]
(* FormFunction[...] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RectangularRepeatingElement.html) for more details.*