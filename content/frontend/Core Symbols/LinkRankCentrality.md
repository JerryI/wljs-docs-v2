# LinkRankCentrality

`LinkRankCentrality[g, α]` gives the link-rank centralities for edges in the graph g and weight α.

- `LinkRankCentrality[g, α, β]` gives the link-rank centralities, using weight α and initial vertex page-rank centralities β.
- `LinkRankCentrality[{v -> w, ...}, ...]` uses rules v -> w to specify the graph g.

## Examples

```wolfram
g = Graph[{1 -> 2, 2 -> 3, 3 -> 1}];
LinkRankCentrality[g, 0.85]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LinkRankCentrality.html) for more details.*