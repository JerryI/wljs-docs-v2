# ParallelCombine

```
ParallelCombine[f,h[e1,e2,…],comb] evaluates f[h[e1,e2,…]] in parallel by distributing parts of the computation to all parallel kernels and combining the partial results with comb.

ParallelCombine[f,h[e1,e2, …]] is equivalent to ParallelCombine[f,h[e1,e2,…],h] if h has attribute Flat, and ParallelCombine[f,h[e1,e2,…],Join] otherwise.
```




*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/) for more details and examples on core symbols.*