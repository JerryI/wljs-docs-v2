# LuccioSamiComponents

`LuccioSamiComponents[g]` gives the Luccio–Sami components of the graph g.

- `LuccioSamiComponents[g, {v1, v2, …}]` gives the components that include at least one of the vertices v1, v2, ….
- `LuccioSamiComponents[{v -> w, …}, …]` uses rules v -> w to specify the graph g.

## Examples

```wolfram
g = Graph[{1 <-> 2, 2 <-> 3, 3 <-> 1, 4 <-> 5}];
LuccioSamiComponents[g]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LuccioSamiComponents.html) for more details.*