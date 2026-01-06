# AnyOrder

`AnyOrder[p1, p2, ...]` is a grammar rules pattern object that represents a sequence of elements matching p1, p2, ... in any order.

## Examples

Parse elements in any order:

```wolfram
GrammarRules[{"start" -> AnyOrder["a", "b", "c"]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AnyOrder.html) for more details.*