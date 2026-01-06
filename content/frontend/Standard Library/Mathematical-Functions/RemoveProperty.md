# RemoveProperty

`RemoveProperty[{obj, itemspec}]` removes all properties associated with itemspec in obj.

- `RemoveProperty[{obj, itemspec}, name]` removes the property name associated with itemspec in obj.

## Examples

```wolfram
g = SetProperty[{Graph[{1 -> 2}], 1}, "MyProperty" -> "value"];
RemoveProperty[{g, 1}, "MyProperty"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RemoveProperty.html) for more details.*