---
title: GenomeLookup
---

`GenomeLookup["seq"]` returns the positions of exact matches for the DNA sequence `seq` on the reference human genome.

- `GenomeLookup["seq", n]` returns at most `n` matches.

## Examples

```wolfram
GenomeLookup["GATTACA"]
```

```wolfram
GenomeLookup["ATCGATCG", 5]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GenomeLookup.html) for more details.*