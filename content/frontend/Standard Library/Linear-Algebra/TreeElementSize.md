# TreeElementSize

`TreeElementSize` is an option for `Tree` and related functions that specifies what size should be used for subtree elements.

## Examples

Set element size in a tree:

```wolfram
Tree[{1, 2, 3}, TreeElementSize -> 50]
```

Uniform element size:

```wolfram
Tree[a -> {b, c, d -> {e, f}}, TreeElementSize -> {40, 30}]
```

Different sizing:

```wolfram
Tree[{"Root" -> {"Child1", "Child2"}}, TreeElementSize -> Automatic]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TreeElementSize.html) for more details.*