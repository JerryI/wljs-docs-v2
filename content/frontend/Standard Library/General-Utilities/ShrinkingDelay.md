# ShrinkingDelay

`ShrinkingDelay` is an option for dynamic objects that specifies how long to delay before shrinking the size of the region in which the object is displayed to the actual size of the object.

## Examples

```wolfram
DynamicModule[{x = "Short"}, Dynamic[x, ShrinkingDelay -> 1]]
```

```wolfram
Panel[Dynamic[expr], ShrinkingDelay -> 0.5]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ShrinkingDelay.html) for more details.*