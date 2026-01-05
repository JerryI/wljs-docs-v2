# TreeElementShape

`TreeElementShape` is an option for `Tree` and related functions that specifies what graphics should be used for subtree elements.

## Examples

Create a tree with custom element shapes:

```wolfram
Tree[{a, {b, c}}, TreeElementShape -> "Diamond"]
```

Use different shapes for different levels:

```wolfram
Tree[{a, {b, c}}, TreeElementShape -> {1 -> "Square", _ -> "Circle"}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TreeElementShape.html) for more details.*