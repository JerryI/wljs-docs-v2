# KeyCollisionFunction

`KeyCollisionFunction` is an option for `JoinAcross` that specifies how to handle pairs of elements that are not being joined but nevertheless have the same key.

## Examples

```wolfram
JoinAcross[{<|"a" -> 1|>}, {<|"a" -> 2|>}, "a", KeyCollisionFunction -> First]
```

```wolfram
JoinAcross[data1, data2, "id", KeyCollisionFunction -> (Last[{##}] &)]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/KeyCollisionFunction.html) for more details.*