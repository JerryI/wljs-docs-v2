# Property

`Property[item, name -> value]` associates the property name->value with item.

## Examples

```wolfram
Graph[{1 -> 2, 2 -> 3}, VertexLabels -> Automatic, 
  Properties -> {1 -> {"Label" -> "Start"}}]
```

```wolfram
Property[1, "color" -> Red]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Property.html) for more details.*