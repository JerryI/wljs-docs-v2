---
title: SquareRepeatingElement
---

`SquareRepeatingElement[spec]` represents a square array of elements of type spec in an interpreter, API, or form specification.

- `SquareRepeatingElement[spec, max]` represents a square array of elements of maximum size max × max.
- `SquareRepeatingElement[spec, {min, max}]` represents a square array of elements of size between min and max.

## Examples

```wolfram
FormFunction[{"matrix" -> SquareRepeatingElement["Number", 3]}, Identity]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SquareRepeatingElement.html) for more details.*