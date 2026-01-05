# ExternalBundle

`ExternalBundle[{name1->obj1,name2->obj2,…}]` represents a bundle of resources to be externally deployed as named URLs, functions, etc.

`ExternalBundle[{name11->{name1->…,…},…}]` represents a nested bundle of resources.

## Examples

Create a bundle of cloud functions:

```wolfram
ExternalBundle[{"func1" -> CloudFunction[f], "func2" -> CloudFunction[g]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ExternalBundle.html) for more details.*