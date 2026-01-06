# RussellRaoDissimilarity

`RussellRaoDissimilarity[u, v]` gives the Russell–Rao dissimilarity between Boolean vectors u and v.

## Examples

Calculate dissimilarity between Boolean vectors:

```wolfram
RussellRaoDissimilarity[{1, 0, 1, 1}, {1, 1, 0, 1}]
```

Identical vectors have zero dissimilarity:

```wolfram
RussellRaoDissimilarity[{1, 1, 1}, {1, 1, 1}]
(* 0 *)
```

Compare with other dissimilarity measures:

```wolfram
{RussellRaoDissimilarity[{1, 0, 1}, {1, 1, 0}],
 JaccardDissimilarity[{1, 0, 1}, {1, 1, 0}]}
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RussellRaoDissimilarity.html) for more details.*