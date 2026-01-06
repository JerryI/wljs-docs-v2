---
title: StadiumShape
---

`StadiumShape[{{x1, y1}, {x2, y2}}, r]` represents a stadium of radius r between the points {x1, y1} and {x2, y2}.

## Examples

Create a horizontal stadium shape:

```wolfram
Graphics[StadiumShape[{{0, 0}, {2, 0}}, 0.5]]
```

A vertical stadium:

```wolfram
Graphics[StadiumShape[{{0, 0}, {0, 3}}, 1]]
```

Stadium with styling:

```wolfram
Graphics[{
  EdgeForm[Thick], 
  LightBlue, StadiumShape[{{-1, -1}, {1, 1}}, 0.5]
}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StadiumShape.html) for more details.*