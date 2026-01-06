# CompoundElement

`CompoundElement[{spec1, spec2, ...}]` represents a form or interpreter specification for a list of fields or inputs that gives a list of results.

`CompoundElement[<|key1 -> spec1, key2 -> spec2, ...|>]` represents a specification that gives an association of results.

## Examples

Create a compound form element:

```wolfram
CompoundElement[{"Number", "String"}]
```

With named fields:

```wolfram
CompoundElement[<|"age" -> "Integer", "name" -> "String"|>]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CompoundElement.html) for more details.*