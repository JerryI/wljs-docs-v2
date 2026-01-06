# PartBehavior

`PartBehavior` is an option to `Query` and related functions that specifies how nonexistent parts should be resolved.

## Examples

Return Missing for nonexistent parts:
```wolfram
Query["key", PartBehavior -> Missing][<|"a" -> 1|>]
```

Fail on missing parts:
```wolfram
Query["key", PartBehavior -> "Error"][data]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PartBehavior.html) for more details.*