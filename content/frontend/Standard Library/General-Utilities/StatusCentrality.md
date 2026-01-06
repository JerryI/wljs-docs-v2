# StatusCentrality

`StatusCentrality[g]` gives a list of status centralities for the vertices in the graph g.

- `StatusCentrality[{v -> w, ...}]` uses rules v -> w to specify the graph g.

## Examples

```wolfram
g = Graph[{1 -> 2, 2 -> 3, 3 -> 1}];
StatusCentrality[g]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StatusCentrality.html) for more details.*